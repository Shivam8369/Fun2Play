
import mysql.connector
import cgi


form = cgi.FieldStorage()
Name = form.getvalue("username")
Email = form.getvalue("Email")
Password = form.getvalue("Password")
Confirm_Password = form.getvalue("Confirm_Password")

conn = mysql.connector.connect(
  host="localhost",
  user="root",
  port = 3306,
  passwd="",
  database="fun2play"
  )
mycursor = conn.cursor()

if(Password == Confirm_Password):
    sql = "insert into login_form(Name,Email,Password) values(Name, Email, Password)"
    mycursor.execute(sql)
    conn.commit()
    mycursor.close()
    conn.close()
    print("hello")
else:
    print("<h3> Enter correct Password</h3>")


# http://localhost/FunToPlay/src/connectivity/signup.py
