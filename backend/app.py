from flask import Flask, request, jsonify
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi
from urllib.parse import urlparse, parse_qs
from togther import get_response

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

def get_transcript(youtube_url):
    video_id = youtube_url.split("v=")[-1]
    transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
    try:
        transcript = transcript_list.find_manually_created_transcript()
    except:
        try:
            generated_transcripts = [trans for trans in transcript_list if trans.is_generated]
            transcript = generated_transcripts[0]
        except:
            return "No suitable transcript found."
    full_transcript = " ".join([part['text'] for part in transcript.fetch()])
    summary = get_response(full_transcript)
    return summary

@app.route('/', methods=['GET'])
def home():
    return "Backend server is running!"

@app.route('/api/summarize-url', methods=['POST'])
def summarize_youtube_video():
    print("In the summarize_youtube_video function")
    url = request.form.get('youtubeUrl')
    # print("Here is the received URL:", url)
    transcript = get_transcript(url)
    print("Here is the transcript:", transcript)
    # tesing with hardcoded response
    # test_trans = "CMU is a great school, really? I don't know. I am just testing this out."
    
    return jsonify({'transcript': transcript})

@app.route('/api/summarize-pdf', methods=['POST'])
def summarize_pdf():
    print("In the summarize_pdf function")
    file = request.files['pdfFile']
    print(file)
    return jsonify({'summary': 'This is a summary of the PDF.'})

if __name__ == '__main__':
    app.run(debug=True)