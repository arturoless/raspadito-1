import socket
import I2C_LCD_driver
from time import *

mylcd = I2C_LCD_driver.lcd()
HOST = '192.168.137.202'
PORT = 3000
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((HOST, PORT))
s.listen(1)
conn, addr = s.accept()
print ('Connected by', addr)
while 1:
   data = conn.recv(1024)
   str_pad = " " * 16
   datos = data.decode('iso-8859-1')
   mylcd.lcd_clear()
   datos = str_pad + datos
   for i in range (0, len(datos)):
     lcd_text = datos[i:(i+16)]
     mylcd.lcd_display_string(lcd_text,1)
     sleep(0.3)
     mylcd.lcd_display_string(str_pad,1)
   if not data: break
   conn.sendall(data)

