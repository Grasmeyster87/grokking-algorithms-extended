def greet2(name):
    print("how are you, ", name, "?")

def bye():
    print("ok buy!")

def greet(name):
    print("hello, ", name, "!")
    greet2(name)
    print("getting ready to say bue...")
    bye()

greet("adit")