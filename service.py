import pandas as pd
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
conn = db.create_engine('mssql+pymssql://phoenix:sql8x8@127.0.0.1:1433/CCBISDW',{})
# conn = db.create_engine('mysql+pymysql://root:sql8x8@127.0.0.1:3306/CCBISDW?charset=utf8',{})

def customerLocation():
    # sql = 'select EnglishCountryRegionName name,count(distinct customerkey) value from DimCustomer group by EnglishCountryRegionName order by EnglishCountryRegionName desc'
    sql = 'select Customer_Country name,count(CDRID) value from CustomerService group by Customer_Country order by Customer_Country desc'
    df = pd.read_sql(sql,con=conn)
    df = df.where(df.notnull(),None)
    return df

def weeklyCallVolume():
    sql = 'select ReportWeekNumber, ReportYearNumber, EnglishCountryRegionName Country, count(CDRID) Volume \
           from FactCDR f \
           left join DimDate d on f.CallDate = d.FullDate \
           left join DimCustomer c on f.CustomerKey = c.CustomerKey \
           group by ReportYearNumber, ReportWeekNumber, EnglishCountryRegionName \
           order by ReportYearNumber, ReportWeekNumber, EnglishCountryRegionName desc'
    df = pd.read_sql(sql,con=conn)
    df = df.where(df.notnull(),None)
    return df[['ReportWeekNumber','Country','Volume']]

def serviceTypeSort():
    sql = 'select ServiceType_Desc servicetype,count(CDRID) amount,sum(case when Satisfaction>4 then 1 else 0 end)*100/count(CDRID) satisfaction \
           from FactCDR f left join DimServiceType s on f.ServiceType_Key = s.ServiceType_Key \
           group by ServiceType_Desc order by amount'
    df = pd.read_sql(sql,conn)
    df = df.where(df.notnull(),None)
    return df

def getKPIs():
    sql = "select sum(case when Status = 'Open' then 1 else 0 end) opentickets, \
       sum(case when Status = 'Processed' then 1 else 0 end) processed, \
       cast(sum(FirstResolved)*100.0/count(CDRID) as decimal(18,2)) firstresolved, \
	   cast(sum(case when satisfaction>4 then 1 else 0 end)*100.0/count(CDRID) as decimal(18,2)) satisfaction, \
       cast(sum(case when WorkDaystoResolved<16 then 1 else 0 end)*100.0/sum(case when Status='Processed' then 1 else 0 end) as decimal(18,2)) sla, \
	   cast((sum(case when NPS>8 then 1 else 0 end)-sum(case when NPS<7 then 1 else 0 end))*100.0/count(CDRID) as decimal(18,0)) nps \
       from CustomerService"
    df = pd.read_sql(sql,conn)
    df = df.where(df.notnull(),None)
    return df

def getTicketsvsDays():
    sql = 'select count(CDRID) [Call Volume],cast(round(avg(DaystoResolved*1.0),0) as int) [Avg Days to Resolve], cast(sum(case when Satisfaction>3 then 1 else 0 end)*1.0/count(CDRID) as decimal(6,4)) [%Satisfaction], Agent from CustomerService group by Agent'
    df = pd.read_sql(sql,conn)
    df.where(df.notnull(),None)
    return df

def getOpenvsDays():
    sql = "select sum(case when [Status]='Open' then 1 else 0 end) [Open Tickets],cast(round(avg((case when [Status]='Open' then datediff(day,CallDate,CloseDate) end)*1.0),0) as int) [Avg Days Aging], cast(sum(case when Satisfaction>3 then 1 else 0 end)*1.0/count(CDRID) as decimal(6,4)) [%Satisfaction], Agent from CustomerService group by Agent"
    df = pd.read_sql(sql,conn)
    df = df.where(df.notnull(),None)
    return df

def getVolumevsSatisfaction():
    sql = 'select count(CDRID) [Call Volume], cast(sum(case when Satisfaction>3 then 1 else 0 end)*100.0/count(CDRID) as decimal(6,2)) [%Satisfaction], Agent from CustomerService group by Agent'
    df = pd.read_sql(sql,conn)
    df = df.where(df.notnull(),None)
    return df

def getDaysbyAgent():
    sql = 'select cast(round(avg(DaystoResolved*1.0),0) as int) [Avg Days to Resolve], Agent, left(convert(varchar(10),CallDate,23),7) CallMonth from CustomerService group by Agent,left(convert(varchar(10),CallDate,23),7)'
    df = pd.read_sql(sql,conn)
    df = df.where(df.notnull(),None)
    return df

def getAgentDetails():
    sql = "select Agent,count(CDRID) [Call Volume],concat(cast(sum(FirstResolved)*100.0/count(CDRID) as decimal(5,2)),'%') [1st Resolved], \
           cast(round(avg(DaystoResolved*1.0),0) as int) [Avg. Days to Resolve], \
           concat(cast(sum(case when WorkDaystoResolved<16 then 1 else 0 end)*100.0/sum(case when [Status]='Processed' then 1 else 0 end) as decimal(5,2)),'%') [SLA%] \
           from CustomerService group by Agent order by Agent"
    df = pd.read_sql(sql,conn)
    df = df.where(df.notnull(), None)
    return df