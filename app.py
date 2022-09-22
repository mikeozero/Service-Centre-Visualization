from flask import Flask,render_template,jsonify
import time
import service
from readdatabase import de,rde,ltv,decc,rdecc,lmt,cri,amr

app = Flask(__name__)

@app.route('/')
def maincover():
    return render_template('maincover.html')

@app.route('/callcentre')
def callcentre():
    return render_template('callcentre.html')

@app.route('/customerservice')
def customerservice():
    return render_template('customerservice.html')

@app.route('/financial')
def financial():
    return render_template('financial.html')

@app.route('/introduction')
def introduction():
    return render_template('introduction.html')

@app.route('/getCustomerLocation')
def symbolmap():
    dataset = []
    df = service.customerLocation()
    # numpy的数据类型不能被json兼容,因此: int(numpy.integer);numpy.ndarray.tolist()
    for i in range(df.shape[0]):
        dataset.append({'name': df.iloc[i]['name'], 'value': int(df.iloc[i]['value'])})
    return jsonify({'dataset':dataset,'datarange':{'min':min(df['value']),'max':max(df['value'])}})

@app.route('/getStackedBars')
def getStackedBars():
    df = service.weeklyCallVolume()
    weeknum = df['ReportWeekNumber'].unique().tolist()
    countrylist = df['Country'].unique().tolist()
    df = df.set_index(['ReportWeekNumber','Country']).unstack(level=0)['Volume']
    df = df.loc[countrylist]
    df.columns = weeknum
    values = []
    for i in range(len(countrylist)):
        values.append(df.iloc[i].tolist())
    weeknum = ['Week '+str(x) for x in weeknum]
    return jsonify({'weeknum':weeknum,'countrylist':countrylist,'values':values})

@app.route('/getServiceTypeSort')
def getServiceTypeSort():
    df = service.serviceTypeSort()
    source = []
    source.append(['servicetype','amount','satisfaction'])
    for i in range(df.shape[0]):
        source.append([df.iloc[i][0],int(df.iloc[i][1]),int(df.iloc[i][2])])
    return jsonify({'source':source,'min':min(df['satisfaction']),'max':max(df['satisfaction'])})

@app.route('/getKPIs')
def getKPIs():
    df = service.getKPIs()
    return jsonify({'opentickets':int(df['opentickets']),'processed':int(df['processed']),'firstresolved':'{:,.2f}'.format(float(df['firstresolved']))+'%','satisfaction':'{:,.2f}'.format(float(df['satisfaction']))+'%','sla':'{:,.2f}'.format(float(df['sla']))+'%','nps':int(df['nps'])})

### Customer Service Dashboards API #################################################################
@app.route('/getTicketsvsDays')
def getTicketsvsDays():
    df = service.getTicketsvsDays()
    mincallvolume = int(df['Call Volume'].min())
    maxcallvolume = int(df['Call Volume'].max())
    minsatisfaction = float(df['%Satisfaction'].min())
    maxsatisfaction = float(df['%Satisfaction'].max())
    return jsonify({'dataset':df.dropna().values.tolist(),'mincv':mincallvolume,'maxcv':maxcallvolume,'minsf':minsatisfaction,'maxsf':maxsatisfaction})

@app.route('/getOpenvsDays')
def getOpenvsDays():
    df = service.getOpenvsDays()
    minopentickets = int(df['Open Tickets'].min())
    maxopentickets = int(df['Open Tickets'].max())
    minsatisfaction = float(df['%Satisfaction'].min())
    maxsatisfaction = float(df['%Satisfaction'].max())
    return jsonify({'dataset': df.dropna().values.tolist(), 'minot': minopentickets, 'maxot': maxopentickets,
                    'minsf': minsatisfaction, 'maxsf': maxsatisfaction})

@app.route('/getVolumevsSatisfaction')
def getVolumevsSatisfaction():
    df = service.getVolumevsSatisfaction()
    mincallvolume = int(df['Call Volume'].min())
    maxcallvolume = int(df['Call Volume'].max())
    minsatisfaction = float(df['%Satisfaction'].min())
    maxsatisfaction = float(df['%Satisfaction'].max())
    return jsonify({'dataset': df.dropna().values.tolist(), 'mincv': mincallvolume, 'maxcv': maxcallvolume,
                    'minsf': minsatisfaction, 'maxsf': maxsatisfaction})

@app.route('/getDaysbyAgent')
def getDaysbyAgent():
    df = service.getDaysbyAgent()
    agentlist = sorted(df['Agent'].unique().tolist(),reverse=True)
    return jsonify({'agentlist':agentlist,'dataset':df.dropna().values.tolist()})

@app.route('/getagentdetails')
def getagentdetails():
    df = service.getAgentDetails()
    return jsonify(df.values.tolist())

### Financial dashboards api #########################################################################
@app.route('/time')
def get_time():
    return time.strftime("%Y-%m-%d %X")

@app.route('/l1')
def get_l1_data():
    df = de
    quarters = list(df.index)
    gt90 = list(df['gt90_rate'])
    gt30 = list(df['gt30_rate'])
    rpt = list(df['rpt_rate'])
    return jsonify({'quarters':quarters,'gt90':gt90,'gt30':gt30,'rpt':rpt})

@app.route('/c1')
def get_c1_data():
    df = rde
    regions = list(df.columns)
    quarters = list(df.index)
    values = []
    n = len(regions)
    for i in range(n):
        values.append(list(df.iloc[:,i]))
    return jsonify({"regions":regions,"quarters":quarters,"values":values})

@app.route('/c2')
def get_c2_data():
    df = amr
    quarters = list(df.index)
    lt20 = list(df['lt20rt'])
    lt25 = list(df['lt25rt'])
    gt25 = list(df['gt25rt'])
    return jsonify({"quarters":quarters,"lt20":lt20,"lt25":lt25,"gt25": gt25})

@app.route('/r1')
def get_r1_data():
    df = ltv
    quarters = list(df.index)
    l5rt = list(df['l5rt'])
    b56rt = list(df['b56rt'])
    b67rt = list(df['b67rt'])
    b78rt = list(df['b78rt'])
    avg = list(df['avg'])
    return jsonify({'quarters':quarters,'l5rt':l5rt,'b56rt':b56rt,'b67rt':b67rt,'b78rt':b78rt,'avg':avg})

@app.route('/lt')
def get_lt_data():
    df = decc
    quarters = list(df.index)
    gt90 = list(df['gt90_rate'])
    gt30 = list(df['gt30_rate'])
    rpt = list(df['rpt_rate'])
    return jsonify({'quarters':quarters,'gt90':gt90,'gt30':gt30,'rpt':rpt})

@app.route('/rt')
def get_rt_data():
    df = lmt
    quarters = list(df.index)
    visa = list(df['VISA'])
    amex = list(df['AMEX'])
    return jsonify({'quarters':quarters,'visa':visa,'amex':amex})

@app.route('/lb')
def get_lb_data():
    df = cri
    quarters = list(df.index)
    abrt = list(df['abrt'])
    crt = list(df['crt'])
    dert = list(df['dert'])
    return jsonify({'quarters':quarters,'abrt':abrt,'crt':crt,'dert':dert})


@app.route('/rb')
def get_rb_data():
    df = rdecc
    regions = list(df.columns)
    quarters = list(df.index)
    values = []
    n = len(regions)
    for i in range(n):
        values.append(list(df.iloc[:,i]))
    return jsonify({"regions":regions,"quarters":quarters,"values":values})



if __name__ == '__main__':
    app.run()
