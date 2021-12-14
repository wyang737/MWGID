import os
from flask import Flask, request

app = Flask(__name__)

@app.route("/", methods=['GET'])
def update():
    if (request.args.get('password') == "UpdateApplicationXYZ123!!"):
        os.system("sudo make update")
        return "Cool - System Updating"
    
    return "Error - Wrong Password"

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)