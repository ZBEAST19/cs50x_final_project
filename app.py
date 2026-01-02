
"""app for website"""
from flask import Flask, render_template,session,request,redirect
from cs50 import SQL
from werkzeug.security import check_password_hash, generate_password_hash



app =Flask(__name__)

app.secret_key = "zouhair19zh19"



db = SQL("sqlite:///app.db")

@app.route("/")
def homepage():
    """the main page"""
    return render_template("homepage.html")

@app.route("/canvas")
def canvas():
    """the canvas page"""
    return render_template("canvas.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    """the register page"""
    session.clear()

    if request.method == "POST":
        if not request.form.get("username"):
            return ("Username is missing", 400)
        if not request.form.get("password"):
            return ("Password is missing", 400)
        if not request.form.get("confirmation"):
            return ("Confirmation is missing", 400)
        if request.form.get("password") != request.form.get("confirmation"):
            return ("Confirmation and Password are not the same", 400)

        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        if len(rows) != 0:
            return ("Username  existed", 400)

        db.execute("INSERT INTO users (username, hash) VALUES (?, ?)", request.form.get(
            "username"), generate_password_hash(request.form.get("password")))

        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        session["user_id"] = rows[0]["id"]

        return redirect("/")
    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    """the login page"""
        # Forget any user_id
    session.clear()

    # User reached route via POST 
    if request.method == "POST":
        # Ensure username was submitted
        if not request.form.get("username"):
            return ("must provide username", 403)

        # Ensure password was submitted
        if not request.form.get("password"):
            return ("must provide password", 403)

        # Query database for username
        rows = db.execute(
            "SELECT * FROM users WHERE username = ?", request.form.get("username")
        )

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(
            rows[0]["hash"], request.form.get("password")
        ):
            return ("invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
      
    return render_template("login.html")
     
@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/login")


if __name__=="__main__":
    app.run(debug=True, port=9000)
