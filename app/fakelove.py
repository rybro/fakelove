import glob, os, random, re
from flask import abort, Flask, render_template, send_from_directory
app = Flask(__name__)
indexBuffer = []
indexBufferMax = 55


def generateIndexList():
    indexes = glob.glob('templates/*.html')
    indexes = [f.replace('\\', '/') for f in indexes]
    return indexes


def getRandomIndex():
    indexes = generateIndexList()
    random.seed(os.urandom(420))
    randomInt = random.randint(1, len(indexes)) - 1

    return os.path.basename(indexes[randomInt])

@app.route('/')
def index():
    indexes = generateIndexList()
    randomIndex = getRandomIndex()
    while (randomIndex in indexBuffer):
        randomIndex = getRandomIndex()
    indexBuffer.insert(0, randomIndex)
    if len(indexBuffer) >= indexBufferMax:
        indexBuffer.pop()

    return render_template('%s' % randomIndex)


regex = re.compile('[\W_]+', re.UNICODE)


@app.route('/<idx>')
def specificIndex(idx):
    indexes = generateIndexList()

    idx = regex.sub('', idx)
    try:
        with open('templates/%s.html' % idx) as f:
            f.close()
            pass
    except IOError:
       abort(404)

    return render_template('%s.html' % idx)

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'staticfiles'), 'fa.png', mimetype='image/png')

if __name__ == "__main__":
    app.run(host=' ',port=80,debug=False)
