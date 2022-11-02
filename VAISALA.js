
from mpl_toolkits.axes_grid1 import host_subplot
from mpl_toolkits import axisartist
import matplotlib.pyplot as plt
import pandas as pd 
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.ticker as ticker
df = pd.read_csv('./xxxx.csv') #Ingrese el nobre del archivo
datos = pd.read_csv('./continous_data.csv') #Ingrese el nobre del archivo

NO2= datos['NO2 (ug/m3)']
NO= datos['NO (ug/m3)']
CO= datos['CO (ug/m3)']
O3= datos['O3 (ug/m3)']
Uptime= datos['Uptime (s)']
#Dias= 
Etiquetas= ['xx','xx','xx','xx','xx','xx'] #Ingrese las etiquetas deseadas

from calendar import c
fig, ax = plt.subplots()

ax.plot(Uptime,NO2,label='NO2',c='r',lw=.8, alpha=1)
ax.set(xlabel='')
ax.set(ylabel='(ug/m3)')

ax1=ax.twinx()
ax1.plot(Uptime,CO,label='CO',c='darkorange',linestyle='dashed',lw=1, alpha=1)
ax1.set(ylabel='CO (ug/m3)')
ax1.legend()
ax1.yaxis.label.set_color('orange')
ax1.tick_params(axis='y', colors='k')

ax2=ax.twinx()
ax2.spines["right"].set_position(('axes',1.2))
ax2.plot(Uptime,NO,label='NO',c='darkblue',lw=.8, alpha=1)
ax2.set(ylabel='NO (ug/m3)')
ax2.legend(loc=4)
ax2.yaxis.label.set_color('k')
ax2.tick_params(axis='y', colors='k')

ax.plot(Uptime,O3,label='O3', c='darkorange',lw=.8, alpha=0.8)
ax.legend(loc=5)

ax.grid()
ax.legend()

plt.title("xxxxxx") #Inserte el titulo para el grafico
plt.show()

ax.set_xticklabels(Etiquetas)#, rotation=90)

ticks_x= ticker.FuncFormatter(lambda x,pos:'{:.0f}'.format(x/3849))
ax1.xaxis.set_major_formatter(ticks_x)
plt.figure(figsize=(15,15))
fig.savefig('15 de Julio.png',dpi=800,figsize=(15,15))

#NO2
from calendar import c
fig, ax = plt.subplots()
ax.plot(Uptime,NO2,label='NO2',lw=1, alpha=0.8)
ax.set(ylabel='(ug/m3)')
ax.grid()
ax.legend()
ax.set_xticklabels(Etiquetas)#, rotation=90)
plt.title("NO2 12-13 de Julio")
fig.savefig('NO2 115 de Julio.png',dpi=600)
#CO
from calendar import c
fig, ax = plt.subplots()
ax.plot(Uptime,CO,label='CO',lw=1, alpha=0.8)
#ax.set(xlabel='Tiempo')
ax.set(ylabel='(ug/m3)')
ax.grid()
ax.legend()
ax.set_xticklabels(Etiquetas)#2, rotation=90)
plt.title("CO 12-15 de Julio")
fig.savefig('CO 15 de Julio.png',dpi=600)

#NO
from calendar import c
fig, ax = plt.subplots()
ax.plot(Uptime,NO,label='NO',lw=1, alpha=0.8)
#ax.set(xlabel='Tiempo')
ax.set(ylabel='(ug/m3)')
ax.grid()
ax.legend()
ax.set_xticklabels(Etiquetas)#, rotation=90)
plt.title("NO 12-15 de Julio")
fig.savefig('NO 14-15 de Julio.png',dpi=600)

#O3
from calendar import c
fig, ax = plt.subplots()
ax.plot(Uptime,O3,label='O3',lw=1, alpha=0.8)
#ax.set(xlabel='Tiempo')
ax.set(ylabel='(ug/m3)')
ax.grid()
ax.legend()
ax.set_xticklabels(Etiquetas)#2,rotation=90)
plt.title("O3 12-15 de Julio")
fig.savefig('O3 14-15 de Julio.png',dpi=600)


