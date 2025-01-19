# Transcription and Translation Pipeline

Welcome to the **Transcription and Translation Pipeline!** This project integrates state-of-the-art models to deliver seamless transcription, translation, and text-to-speech conversion for multiple languages dynamically.

---

## Features

- **Automatic Speech Recognition (ASR):** Convert audio input into text using OpenAI Whisper.
- **Translation:** Translate text between Indian languages and English with IndicTrans.
- **Text-to-Speech (TTS):** Generate audio output from text using Google TTS.
- **Dynamic Language Support:** Automatically detects and adapts to various languages.
- **Model Integration:** Includes integrations with tools like LangFlow for workflow optimization and Datastack for efficient data management.
- **Transformers:** Leverages state-of-the-art transformer models such as BERT for enhanced NLP tasks.

---

## Components

- **OpenAI Whisper:** Recognizes and transcribes speech into text.
- **IndicTrans:** Handles language translation between supported Indian languages and English.
- **Google TTS:** Converts translated text into audio output.
- **Transformers:** Utilizes powerful transformer-based models like BERT for improved language understanding.

---

## Modes of Operation

### 1. **Transcription Mode**
Input audio ➔ Transcription (ASR) ➔ Translation ➔ Audio output (TTS).

### 2. **Translation Mode**
Input audio ➔ Transcription (ASR) ➔ Translation ➔ Text output.

---

## Getting Started

### Prerequisites

- Python 3.7 or higher.
- Required packages: `torch`, `transformers`, `google-cloud-texttospeech`.
- Access to APIs for OpenAI Whisper, IndicTrans, and Google TTS.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd transcription-translation-pipeline
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Configure API keys and environment variables:
   - Add your API keys for Google TTS.
   - Ensure access to OpenAI Whisper and IndicTrans models.

### Running the Pipeline

#### Transcription Mode:
```bash
python pipeline.py --mode transcription --input <audio_file_path>
```

#### Translation Mode:
```bash
python pipeline.py --mode translation --input <audio_file_path> --target_language <language_code>
```

---

## Dynamic Language Handling

- Whisper detects the input language automatically.
- IndicTrans dynamically translates text based on the desired target language.
- Google TTS generates audio in the target language.
- Workflow optimization and data management are supported through LangFlow and Datastack integrations.

---

## Contributing

We welcome contributions! To contribute:

1. Fork this repository.
2. Create a new branch.
3. Commit your changes.
4. Submit a pull request.

---

## Acknowledgements

Special thanks to:

- **OpenAI** for Whisper.
- **AI4Bharat** for IndicTrans.
- **Google Cloud** for TTS.
- **Hugging Face** for Transformers and BERT.
- **LangFlow** for workflow management.
- **Datastack** for efficient data handling.

For any issues or inquiries, feel free to open an issue or reach out!

---

## Media and Demo

- **GitHub Repository:** [Add Link]
- **YouTube Video Demo:** [Add Link]
- **Thumbnail:** [Upload Thumbnail]
- **Pictures:** [Upload Images]

---

Thank you for using the Transcription and Translation Pipeline! 🚀

