// Global vocabulary array with all 154 preloaded entries
var vocabulary = [
  {"id": 1, "norwegian": "hei", "english": "hello"},
  {"id": 2, "norwegian": "takk", "english": "thanks"},
  {"id": 3, "norwegian": "ja", "english": "yes"},
  {"id": 4, "norwegian": "nei", "english": "no"},
  {"id": 5, "norwegian": "jeg", "english": "I"},
  {"id": 6, "norwegian": "du", "english": "you"},
  {"id": 7, "norwegian": "det", "english": "it, that, the"},
  {"id": 8, "norwegian": "hus", "english": "house"},
  {"id": 9, "norwegian": "bil", "english": "car"},
  {"id": 10, "norwegian": "mat", "english": "food"},
  {"id": 11, "norwegian": "vann", "english": "water"},
  {"id": 12, "norwegian": "kaffe", "english": "coffee"},
  {"id": 13, "norwegian": "bok", "english": "book"},
  {"id": 14, "norwegian": "skole", "english": "school"},
  {"id": 15, "norwegian": "dag", "english": "day"},
  {"id": 16, "norwegian": "Hva", "english": "What"},
  {"id": 17, "norwegian": "ikke", "english": "not, do not, don't"},
  {"id": 18, "norwegian": "heter", "english": "is named, is called, are called"},
  {"id": 19, "norwegian": "Sverige", "english": "Sweden"},
  {"id": 20, "norwegian": "vet", "english": "knows, know, does.... know"},
  {"id": 21, "norwegian": "liten", "english": "small, little"},
  {"id": 22, "norwegian": "bor", "english": "live, does ... live, are living"},
  {"id": 23, "norwegian": "dyr", "english": "expensive, dear, pricey"},
  {"id": 24, "norwegian": "også", "english": "also, too, as well"},
  {"id": 25, "norwegian": "stor", "english": "grand, large, great"},
  {"id": 26, "norwegian": "by", "english": "town, city, treat"},
  {"id": 27, "norwegian": "stort", "english": "large, great, big"},
  {"id": 28, "norwegian": "fra", "english": "from, of, since"},
  {"id": 29, "norwegian": "kommer", "english": "will come, is getting, do.... get"},
  {"id": 30, "norwegian": "Oslo", "english": "Oslo"},
  {"id": 31, "norwegian": "Norge", "english": "Norway"},
  {"id": 32, "norwegian": "i", "english": "in, to, of"},
  {"id": 33, "norwegian": "USA", "english": "the US, the United States"},
  {"id": 34, "norwegian": "der", "english": "there, where"},
  {"id": 35, "norwegian": "lite", "english": "small, little"},
  {"id": 36, "norwegian": "land", "english": "shore, countries, lands"},
  {"id": 37, "norwegian": "av og til", "english": "sometimes, now and then, on occasion"},
  {"id": 38, "norwegian": "spiller", "english": "are playing, is playing, do... play"},
  {"id": 39, "norwegian": "gitar", "english": "(the) guitar"},
  {"id": 40, "norwegian": "piano", "english": "piano"},
  {"id": 41, "norwegian": "på", "english": "on (top), upon, of"},
  {"id": 42, "norwegian": "lager", "english": "make, do... make, is making"},
  {"id": 43, "norwegian": "hører", "english": "hear, does... hear, do... hear"},
  {"id": 44, "norwegian": "musikk", "english": "music"},
  {"id": 45, "norwegian": "aldri", "english": "never, not ever, no way"},
  {"id": 46, "norwegian": "ofte", "english": "often, frequently, a lot"},
  {"id": 47, "norwegian": "leser", "english": "are reading, am reading, is reading"},
  {"id": 48, "norwegian": "maler", "english": "paint, do... paint, does... paint"},
  {"id": 49, "norwegian": "svømmer", "english": "swim, is swimming, am swimming"},
  {"id": 50, "norwegian": "men", "english": "but"},
  {"id": 51, "norwegian": "interessant", "english": "interesting"},
  {"id": 52, "norwegian": "stressende", "english": "stressful"},
  {"id": 53, "norwegian": "vanskelig", "english": "difficult, hard, tricky"},
  {"id": 54, "norwegian": "jobb", "english": "work, (a) job, workplace"},
  {"id": 55, "norwegian": "hun", "english": "she"},
  {"id": 56, "norwegian": "din", "english": "your, your (singular), yours (singular)"},
  {"id": 57, "norwegian": "lærer", "english": "teacher, is teaching, am learning, are learning"},
  {"id": 58, "norwegian": "sykepleier", "english": "(a) nurse"},
  {"id": 59, "norwegian": "han", "english": "he"},
  {"id": 60, "norwegian": "professor", "english": "professor"},
  {"id": 61, "norwegian": "student", "english": "student"},
  {"id": 62, "norwegian": "lege", "english": "physician, doctor, heal"},
  {"id": 63, "norwegian": "mer", "english": "more, any more, anymore"},
  {"id": 64, "norwegian": "for", "english": "too, for, to"},
  {"id": 65, "norwegian": "fisk", "english": "fish"},
  {"id": 66, "norwegian": "regning", "english": "bill"},
  {"id": 67, "norwegian": "servitør", "english": "waiter, waitress"},
  {"id": 68, "norwegian": "unnskyld", "english": "excuse me, sorry, pardon"},
  {"id": 69, "norwegian": "teen", "english": "the tea"},
  {"id": 70, "norwegian": "kald", "english": "cold, cool, chilly"},
  {"id": 71, "norwegian": "restaurant", "english": "restaurant"},
  {"id": 72, "norwegian": "meny", "english": "menu"},
  {"id": 73, "norwegian": "godt", "english": "well, nicely, carefully"},
  {"id": 74, "norwegian": "et", "english": "an, a, one"},
  {"id": 75, "norwegian": "egg", "english": "egg, eggs"},
  {"id": 76, "norwegian": "egget", "english": "the egg"},
  {"id": 77, "norwegian": "brødet", "english": "the bread"},
  {"id": 78, "norwegian": "salat", "english": "lettuce, salad"},
  {"id": 79, "norwegian": "med", "english": "with, to, of"},
  {"id": 80, "norwegian": "varm", "english": "hot, warm"},
  {"id": 81, "norwegian": "kaffen", "english": "the coffee"},
  {"id": 82, "norwegian": "pizza", "english": "pizza"},
  {"id": 83, "norwegian": "ost", "english": "cheese"},
  {"id": 84, "norwegian": "god helg", "english": "(have a) nice weekend"},
  {"id": 85, "norwegian": "vær så snill", "english": "please"},
  {"id": 86, "norwegian": "ha det bra", "english": "goodbye"},
  {"id": 87, "norwegian": "det går bra med meg", "english": "I'm (doing) fine, I'm (doing) okay, I'm (doing) well"},
  {"id": 88, "norwegian": "bare hyggelig", "english": "my pleasure, you are welcome, you're welcome"},
  {"id": 89, "norwegian": "hvordan går det med deg", "english": "how are you (doing)"},
  {"id": 90, "norwegian": "beklager", "english": "sorry, are sorry, am sorry"},
  {"id": 91, "norwegian": "kanskje", "english": "maybe, perhaps, possibly"},
  {"id": 92, "norwegian": "tusen takk", "english": "thank you very much"},
  {"id": 93, "norwegian": "god dag", "english": "good day, good afternoon"},
  {"id": 94, "norwegian": "går det bra", "english": "are you alright"},
  {"id": 95, "norwegian": "går det bra med deg", "english": "are you (doing) alright, are you (doing) well, are you (doing) okay"},
  {"id": 96, "norwegian": "god", "english": "happy, nice, tasty"},
  {"id": 97, "norwegian": "hallo", "english": "hello, hi, hey"},
  {"id": 98, "norwegian": "bra", "english": "alright, good, well"},
  {"id": 99, "norwegian": "hvordan går det", "english": "how is it going, how's it going"},
  {"id": 100, "norwegian": "her", "english": "here"},
  {"id": 101, "norwegian": "hvor", "english": "where, how"},
  {"id": 102, "norwegian": "å", "english": "to, oh"},
  {"id": 103, "norwegian": "hunden", "english": "the dog"},
  {"id": 104, "norwegian": "katten", "english": "the cat"},
  {"id": 105, "norwegian": "morsom", "english": "funny, fun"},
  {"id": 106, "norwegian": "ung", "english": "young"},
  {"id": 107, "norwegian": "katt", "english": "cat, kitty"},
  {"id": 108, "norwegian": "hund", "english": "dog, hound"},
  {"id": 109, "norwegian": "jenta", "english": "the girl"},
  {"id": 110, "norwegian": "gutten", "english": "the boy"},
  {"id": 111, "norwegian": "har", "english": "is, are having, do... have"},
  {"id": 112, "norwegian": "kvinnen", "english": "the woman"},
  {"id": 113, "norwegian": "mannen", "english": "the man"},
  {"id": 114, "norwegian": "høy", "english": "tall, high"},
  {"id": 115, "norwegian": "veldig", "english": "very, a lot, really"},
  {"id": 116, "norwegian": "smart", "english": "smart"},
  {"id": 117, "norwegian": "snill", "english": "nice, kind, gentle"},
  {"id": 118, "norwegian": "min", "english": "my, mine"},
  {"id": 119, "norwegian": "er", "english": "is, have (been), am"},
  {"id": 120, "norwegian": "broren", "english": "the brother"},
  {"id": 121, "norwegian": "datteren", "english": "the daughter"},
  {"id": 122, "norwegian": "sønnen", "english": "the son"},
  {"id": 123, "norwegian": "faren", "english": "the father"},
  {"id": 124, "norwegian": "moren", "english": "the mother"},
  {"id": 125, "norwegian": "far", "english": "father"},
  {"id": 126, "norwegian": "mor", "english": "mother"},
  {"id": 127, "norwegian": "søster", "english": "sister"},
  {"id": 128, "norwegian": "en", "english": "a, an, one"},
  {"id": 129, "norwegian": "bror", "english": "brother"},
  {"id": 130, "norwegian": "eller", "english": "or, nor"},
  {"id": 131, "norwegian": "ha det", "english": "bye, so long, goodbye"},
  {"id": 132, "norwegian": "øl", "english": "beer, ale"},
  {"id": 133, "norwegian": "velkommen", "english": "welcome"},
  {"id": 134, "norwegian": "te", "english": "tea"},
  {"id": 135, "norwegian": "vin", "english": "wine"},
  {"id": 136, "norwegian": "brød", "english": "bread"},
  {"id": 137, "norwegian": "melk", "english": "milk"},
  {"id": 138, "norwegian": "og", "english": "and"},
  {"id": 139, "norwegian": "engelsk", "english": "english"},
  {"id": 140, "norwegian": "hvem", "english": "who"},
  {"id": 141, "norwegian": "jeg snakker engelsk", "english": "I speak english"},
  {"id": 142, "norwegian": "snakker", "english": "I speak, I am speaking"},
  {"id": 143, "norwegian": "å snakke", "english": "to speak, to talk"},
  {"id": 144, "norwegian": "mannen snakker engelsk", "english": "the man speaks english"},
  {"id": 145, "norwegian": "å forstå", "english": "to understand"},
  {"id": 146, "norwegian": "forstår du", "english": "do you understand"},
  {"id": 147, "norwegian": "forstår du engelsk", "english": "do you understand english"},
  {"id": 148, "norwegian": "er norsk vanskelig", "english": "is Norwegian difficult?"},
  {"id": 149, "norwegian": "jeg snakker ikke engelsk", "english": "I dont speak english"},
  {"id": 150, "norwegian": "han snakker", "english": "he's speaking"},
  {"id": 151, "norwegian": "hvem, hva, hvor", "english": "who, what, where"},
  {"id": 152, "norwegian": "snakker læreren norsk", "english": "does the teacher speak norwegian"},
  {"id": 153, "norwegian": "jeg snakker norsk også", "english": "I speak norwegian also"},
  {"id": 154, "norwegian": "hvem er hun", "english": "who is she"}
];

// Quiz and statistics state
var currentQuiz = null;
var questionIndex = 0;
var score = 0;
var quizResults = [];
var statistics = {
    totalQuizzes: 0,
    totalCorrect: 0,
    totalQuestions: 0,
    wordStats: {}
};
var filteredVocabulary = vocabulary.slice();

console.log('App loaded with', vocabulary.length, 'vocabulary entries');

// Initialize word statistics
function initializeWordStats() {
    vocabulary.forEach(function(word) {
        if (!statistics.wordStats[word.id]) {
            statistics.wordStats[word.id] = {
                attempts: 0,
                correct: 0,
                lastSeen: null
            };
        }
    });
}

// Navigation functions - these need to be globally accessible
window.showAddWords = function() {
    console.log('Showing add words section');
    hideAllSections();
    document.getElementById('add-words').classList.remove('hidden');
};

window.showViewWords = function() {
    console.log('Showing view words section');
    hideAllSections();
    document.getElementById('view-words').classList.remove('hidden');
    renderWordList();
};

window.showQuiz = function() {
    console.log('Showing quiz section');
    hideAllSections();
    document.getElementById('quiz').classList.remove('hidden');
    updateQuizSetup();
};

window.showStats = function() {
    console.log('Showing statistics section');
    hideAllSections();
    document.getElementById('stats').classList.remove('hidden');
    renderStatistics();
};

function hideAllSections() {
    var sections = ['add-words', 'view-words', 'quiz', 'stats'];
    sections.forEach(function(sectionId) {
        document.getElementById(sectionId).classList.add('hidden');
    });
}

// Add word function with duplicate prevention and validation
window.addWord = function(event) {
    console.log('Add word function called');
    event.preventDefault();
    
    var norwegianInput = document.getElementById('norwegian');
    var englishInput = document.getElementById('english');
    var messageDiv = document.getElementById('add-message');
    
    var norwegian = norwegianInput.value.trim();
    var english = englishInput.value.trim();
    
    console.log('Input values:', norwegian, english);
    
    if (!norwegian || !english) {
        showMessage(messageDiv, '❌ Please fill in both fields!', false);
        return;
    }
    
    // Check for duplicates (case-insensitive)
    var existingWord = vocabulary.find(function(word) {
        return word.norwegian.toLowerCase() === norwegian.toLowerCase();
    });
    
    if (existingWord) {
        showMessage(messageDiv, '⚠️ Word "' + norwegian + '" already exists. Please try a different word.', false);
        return;
    }
    
    // Create new word with auto-incrementing ID (starting at 155)
    var maxId = Math.max.apply(Math, vocabulary.map(function(w) { return w.id; }));
    var newWord = {
        id: Math.max(maxId + 1, 155),
        norwegian: norwegian,
        english: english
    };
    
    vocabulary.push(newWord);
    filteredVocabulary = vocabulary.slice();
    
    // Initialize statistics for new word
    statistics.wordStats[newWord.id] = {
        attempts: 0,
        correct: 0,
        lastSeen: null
    };
    
    console.log('Word added:', newWord);
    console.log('Total words now:', vocabulary.length);
    
    // Clear form
    norwegianInput.value = '';
    englishInput.value = '';
    
    showMessage(messageDiv, '✅ Word "' + norwegian + '" added successfully!', true);
    renderWordList();
};

function showMessage(messageDiv, text, isSuccess) {
    messageDiv.textContent = text;
    messageDiv.className = isSuccess ? 'success-message' : 'success-message';
    messageDiv.classList.remove('hidden');
    
    setTimeout(function() {
        messageDiv.classList.add('hidden');
    }, 3000);
}

// Word list rendering and filtering
function renderWordList() {
    console.log('Rendering word list');
    var wordList = document.getElementById('word-list');
    var wordCount = document.getElementById('word-count');
    
    if (!wordList || !wordCount) return;
    
    wordCount.textContent = filteredVocabulary.length;
    
    if (filteredVocabulary.length === 0) {
        wordList.innerHTML = '<div class="empty-state">No words found. Try adjusting your search or add more vocabulary!</div>';
        return;
    }
    
    var html = '';
    filteredVocabulary.forEach(function(word) {
        var wordStats = statistics.wordStats[word.id] || { attempts: 0, correct: 0 };
        var accuracy = wordStats.attempts > 0 ? Math.round((wordStats.correct / wordStats.attempts) * 100) : 0;
        
        html += '<div class="word-item">' +
            '<div class="word-pair">' +
                '<span class="norwegian-word">' + escapeHtml(word.norwegian) + '</span>' +
                '<span class="word-separator">→</span>' +
                '<span class="english-word">' + escapeHtml(word.english) + '</span>' +
            '</div>' +
            '<div class="word-actions">' +
                '<span class="accuracy-badge">' + accuracy + '%</span>' +
                '<button class="btn btn--outline" onclick="deleteWord(' + word.id + ')">Delete</button>' +
            '</div>' +
        '</div>';
    });
    
    wordList.innerHTML = html;
    console.log('Word list rendered with', filteredVocabulary.length, 'words');
}

window.filterWords = function() {
    var searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    var searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        filteredVocabulary = vocabulary.slice();
    } else {
        filteredVocabulary = vocabulary.filter(function(word) {
            return word.norwegian.toLowerCase().includes(searchTerm) || 
                   word.english.toLowerCase().includes(searchTerm);
        });
    }
    
    renderWordList();
};

window.deleteWord = function(id) {
    console.log('Deleting word with ID:', id);
    if (confirm('Are you sure you want to delete this word?')) {
        vocabulary = vocabulary.filter(function(word) {
            return word.id !== id;
        });
        filteredVocabulary = vocabulary.slice();
        delete statistics.wordStats[id];
        console.log('Word deleted. Remaining words:', vocabulary.length);
        renderWordList();
    }
};

window.exportVocabulary = function() {
    var csvContent = "Norwegian,English\n";
    vocabulary.forEach(function(word) {
        csvContent += '"' + word.norwegian + '","' + word.english + '"\n';
    });
    
    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    var url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'norwegian_vocabulary.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// Quiz functions
function updateQuizSetup() {
    console.log('Updating quiz setup');
    var availableEl = document.getElementById('available-questions');
    var quizzesEl = document.getElementById('quizzes-taken');
    var avgScoreEl = document.getElementById('avg-score');
    var wrongCountEl = document.getElementById('wrong-count');
    var practiceSection = document.getElementById('practice-section');
    var startBtn = document.getElementById('start-quiz-btn');
    
    if (availableEl) availableEl.textContent = vocabulary.length;
    if (quizzesEl) quizzesEl.textContent = statistics.totalQuizzes;
    
    var avgScore = statistics.totalQuestions > 0 ? 
        Math.round((statistics.totalCorrect / statistics.totalQuestions) * 100) + '%' : '0%';
    if (avgScoreEl) avgScoreEl.textContent = avgScore;
    
    // Update wrong answers count
    var wrongWords = Object.keys(statistics.wordStats).filter(function(wordId) {
        var stats = statistics.wordStats[wordId];
        return stats.attempts > 0 && (stats.correct / stats.attempts) < 0.7;
    });
    
    if (wrongCountEl) wrongCountEl.textContent = wrongWords.length;
    
    if (practiceSection) {
        if (wrongWords.length > 0) {
            practiceSection.classList.remove('hidden');
        } else {
            practiceSection.classList.add('hidden');
        }
    }
    
    // Show/hide quiz sections
    var setupSection = document.getElementById('quiz-setup');
    var activeSection = document.getElementById('quiz-active');
    var resultsSection = document.getElementById('quiz-results');
    
    if (setupSection) setupSection.classList.remove('hidden');
    if (activeSection) activeSection.classList.add('hidden');
    if (resultsSection) resultsSection.classList.add('hidden');
    
    // Enable/disable start button
    if (startBtn) {
        if (vocabulary.length < 4) {
            startBtn.disabled = true;
            startBtn.textContent = 'Need at least 4 words to start';
        } else {
            startBtn.disabled = false;
            startBtn.textContent = 'Start 10-Question Quiz';
        }
    }
}

window.startQuiz = function(practiceMode) {
    console.log('Starting quiz', practiceMode ? '(practice mode)' : '');
    
    var availableWords = vocabulary.slice();
    
    if (practiceMode) {
        // Filter to only difficult words
        availableWords = vocabulary.filter(function(word) {
            var stats = statistics.wordStats[word.id];
            return stats && stats.attempts > 0 && (stats.correct / stats.attempts) < 0.7;
        });
        
        if (availableWords.length < 4) {
            alert('Not enough difficult words to practice! Take some regular quizzes first.');
            return;
        }
    }
    
    if (availableWords.length < 4) {
        alert('You need at least 4 words to take a quiz! Add more words first.');
        return;
    }
    
    // Prepare quiz data (10 questions max)
    var shuffledWords = shuffleArray(availableWords);
    var numQuestions = Math.min(10, shuffledWords.length);
    
    currentQuiz = {
        questions: shuffledWords.slice(0, numQuestions),
        totalQuestions: numQuestions,
        practiceMode: practiceMode || false
    };
    
    questionIndex = 0;
    score = 0;
    quizResults = [];
    
    console.log('Quiz prepared with', numQuestions, 'questions');
    
    // Show quiz interface
    document.getElementById('quiz-setup').classList.add('hidden');
    document.getElementById('quiz-active').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    showQuestion();
};

window.practiceWrongAnswers = function() {
    startQuiz(true);
};

function showQuestion() {
    console.log('Showing question', questionIndex + 1);
    
    var question = currentQuiz.questions[questionIndex];
    var isFillIn = Math.random() < 0.5; // 50% fill-in, 50% multiple choice
    
    // Update progress
    var progress = ((questionIndex) / currentQuiz.totalQuestions) * 100;
    var progressFill = document.getElementById('progress-fill');
    if (progressFill) progressFill.style.width = progress + '%';
    
    var currentQ = document.getElementById('current-q');
    var totalQ = document.getElementById('total-q');
    var scoreEl = document.getElementById('score');
    
    if (currentQ) currentQ.textContent = questionIndex + 1;
    if (totalQ) totalQ.textContent = currentQuiz.totalQuestions;
    if (scoreEl) scoreEl.textContent = score;
    
    // Set question type
    var questionType = document.getElementById('question-type');
    if (questionType) questionType.textContent = isFillIn ? 'Fill in the Blank' : 'Multiple Choice';
    
    var questionText = document.getElementById('question-text');
    var answersDiv = document.getElementById('answers');
    var fillInDiv = document.getElementById('fill-in-answer');
    
    if (isFillIn) {
        // Fill-in question: show English, ask for Norwegian
        if (questionText) questionText.textContent = 'How do you say "' + question.english + '" in Norwegian?';
        currentQuiz.correctAnswer = question.norwegian;
        currentQuiz.questionType = 'fill-in';
        
        // Show fill-in input, hide multiple choice
        if (answersDiv) answersDiv.classList.add('hidden');
        if (fillInDiv) fillInDiv.classList.remove('hidden');
        
        var fillInInput = document.getElementById('fill-in-input');
        if (fillInInput) {
            fillInInput.value = '';
            fillInInput.focus();
        }
    } else {
        // Multiple choice question
        var isNorwegianToEnglish = Math.random() < 0.5;
        
        if (isNorwegianToEnglish) {
            if (questionText) questionText.textContent = 'What does "' + question.norwegian + '" mean in English?';
            currentQuiz.correctAnswer = question.english;
        } else {
            if (questionText) questionText.textContent = 'How do you say "' + question.english + '" in Norwegian?';
            currentQuiz.correctAnswer = question.norwegian;
        }
        
        currentQuiz.questionType = 'multiple-choice';
        currentQuiz.isNorwegianToEnglish = isNorwegianToEnglish;
        
        // Create answer options
        var wrongAnswers = getWrongAnswers(question, currentQuiz.correctAnswer, isNorwegianToEnglish);
        var allAnswers = [currentQuiz.correctAnswer].concat(wrongAnswers);
        var shuffledAnswers = shuffleArray(allAnswers);
        
        // Show multiple choice, hide fill-in
        if (fillInDiv) fillInDiv.classList.add('hidden');
        if (answersDiv) answersDiv.classList.remove('hidden');
        
        var html = '';
        shuffledAnswers.forEach(function(answer) {
            html += '<button class="answer-btn" onclick="selectAnswer(\'' + 
                    escapeHtml(answer).replace(/'/g, '&#39;') + '\')">' + 
                    escapeHtml(answer) + '</button>';
        });
        
        if (answersDiv) answersDiv.innerHTML = html;
    }
    
    console.log('Question displayed, type:', currentQuiz.questionType);
}

function getWrongAnswers(currentWord, correctAnswer, isNorwegianToEnglish) {
    var candidates = [];
    
    vocabulary.forEach(function(word) {
        if (word.id !== currentWord.id) {
            var candidate = isNorwegianToEnglish ? word.english : word.norwegian;
            if (candidate.toLowerCase() !== correctAnswer.toLowerCase()) {
                candidates.push(candidate);
            }
        }
    });
    
    return shuffleArray(candidates).slice(0, 3);
}

window.selectAnswer = function(answer) {
    console.log('Answer selected:', answer);
    processAnswer(answer);
};

window.submitFillIn = function() {
    var fillInInput = document.getElementById('fill-in-input');
    if (!fillInInput) return;
    
    var answer = fillInInput.value.trim();
    console.log('Fill-in answer submitted:', answer);
    processAnswer(answer);
};

window.checkEnterKey = function(event) {
    if (event.key === 'Enter') {
        submitFillIn();
    }
};

function processAnswer(answer) {
    var question = currentQuiz.questions[questionIndex];
    var isCorrect = checkAnswer(answer, currentQuiz.correctAnswer);
    
    // Update statistics
    if (!statistics.wordStats[question.id]) {
        statistics.wordStats[question.id] = { attempts: 0, correct: 0, lastSeen: null };
    }
    
    statistics.wordStats[question.id].attempts++;
    statistics.wordStats[question.id].lastSeen = new Date().toISOString();
    
    if (isCorrect) {
        score++;
        statistics.wordStats[question.id].correct++;
        console.log('Correct! Score now:', score);
    } else {
        console.log('Incorrect. Correct answer was:', currentQuiz.correctAnswer);
    }
    
    // Store result
    quizResults.push({
        question: question,
        userAnswer: answer,
        correctAnswer: currentQuiz.correctAnswer,
        isCorrect: isCorrect,
        questionType: currentQuiz.questionType
    });
    
    if (currentQuiz.questionType === 'multiple-choice') {
        // Show correct/incorrect styling for multiple choice
        var buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(function(btn) {
            btn.disabled = true;
            
            if (checkAnswer(btn.textContent.trim(), currentQuiz.correctAnswer)) {
                btn.classList.add('correct');
            } else if (btn.textContent.trim() === answer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    } else {
        // Show result for fill-in
        showFillInResult(isCorrect);
    }
    
    // Move to next question after delay
    setTimeout(function() {
        nextQuestion();
    }, 2000);
}

function showFillInResult(isCorrect) {
    var fillInContainer = document.getElementById('fill-in-answer');
    if (!fillInContainer) return;
    
    var resultDiv = document.createElement('div');
    resultDiv.className = 'fill-in-result ' + (isCorrect ? 'fill-in-correct' : 'fill-in-incorrect');
    
    if (isCorrect) {
        resultDiv.textContent = '✅ Correct!';
    } else {
        resultDiv.textContent = '❌ Incorrect. The answer was: ' + currentQuiz.correctAnswer;
    }
    
    fillInContainer.appendChild(resultDiv);
}

function checkAnswer(userAnswer, correctAnswer) {
    // Case-insensitive comparison with trimming
    var userClean = userAnswer.toLowerCase().trim();
    var correctClean = correctAnswer.toLowerCase().trim();
    
    // Also check if user answer matches any part of the correct answer (for multi-part translations)
    if (correctClean.includes(',')) {
        return correctClean.split(',').some(function(part) {
            return part.trim() === userClean;
        });
    }
    
    return userClean === correctClean;
}

function nextQuestion() {
    console.log('Moving to next question');
    questionIndex++;
    
    if (questionIndex >= currentQuiz.totalQuestions) {
        showResults();
    } else {
        // Clear any fill-in results
        var resultDivs = document.querySelectorAll('.fill-in-result');
        resultDivs.forEach(function(div) {
            div.remove();
        });
        
        showQuestion();
    }
}

function showResults() {
    console.log('Showing results');
    
    // Update overall statistics
    statistics.totalQuizzes++;
    statistics.totalQuestions += currentQuiz.totalQuestions;
    statistics.totalCorrect += score;
    
    document.getElementById('quiz-active').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    
    var finalScore = document.getElementById('final-score');
    var finalTotal = document.getElementById('final-total');
    var scorePercentage = document.getElementById('score-percentage');
    
    if (finalScore) finalScore.textContent = score;
    if (finalTotal) finalTotal.textContent = currentQuiz.totalQuestions;
    
    var percentage = Math.round((score / currentQuiz.totalQuestions) * 100);
    if (scorePercentage) scorePercentage.textContent = percentage + '%';
    
    // Show detailed results
    renderDetailedResults();
    
    console.log('Quiz completed. Final score:', score, 'out of', currentQuiz.totalQuestions);
}

function renderDetailedResults() {
    var detailsDiv = document.getElementById('results-details');
    if (!detailsDiv) return;
    
    var html = '<h3>Question Details:</h3>';
    
    quizResults.forEach(function(result, index) {
        var question = result.question;
        var statusClass = result.isCorrect ? 'correct' : 'incorrect';
        var statusText = result.isCorrect ? '✅ Correct' : '❌ Incorrect';
        
        html += '<div class="result-item">' +
            '<div class="result-question">' +
                '<strong>Q' + (index + 1) + ':</strong> ' +
                escapeHtml(question.norwegian) + ' → ' + escapeHtml(question.english) +
                '<br><small>Your answer: ' + escapeHtml(result.userAnswer) + '</small>' +
            '</div>' +
            '<div class="result-status ' + statusClass + '">' + statusText + '</div>' +
        '</div>';
    });
    
    detailsDiv.innerHTML = html;
}

window.resetQuiz = function() {
    console.log('Resetting quiz');
    currentQuiz = null;
    questionIndex = 0;
    score = 0;
    quizResults = [];
    updateQuizSetup();
};

// Statistics rendering
function renderStatistics() {
    console.log('Rendering statistics');
    
    var totalVocabEl = document.getElementById('total-vocab');
    var totalQuizzesEl = document.getElementById('total-quizzes');
    var overallAccuracyEl = document.getElementById('overall-accuracy');
    var wordsMasteredEl = document.getElementById('words-mastered');
    
    if (totalVocabEl) totalVocabEl.textContent = vocabulary.length;
    if (totalQuizzesEl) totalQuizzesEl.textContent = statistics.totalQuizzes;
    
    var accuracy = statistics.totalQuestions > 0 ? 
        Math.round((statistics.totalCorrect / statistics.totalQuestions) * 100) : 0;
    if (overallAccuracyEl) overallAccuracyEl.textContent = accuracy + '%';
    
    // Count mastered words (>= 80% accuracy with at least 3 attempts)
    var masteredWords = Object.keys(statistics.wordStats).filter(function(wordId) {
        var stats = statistics.wordStats[wordId];
        return stats.attempts >= 3 && (stats.correct / stats.attempts) >= 0.8;
    }).length;
    
    if (wordsMasteredEl) wordsMasteredEl.textContent = masteredWords;
    
    // Show difficult words
    renderDifficultWords();
}

function renderDifficultWords() {
    var difficultList = document.getElementById('difficult-words-list');
    if (!difficultList) return;
    
    var difficultWords = Object.keys(statistics.wordStats)
        .map(function(wordId) {
            var stats = statistics.wordStats[wordId];
            var word = vocabulary.find(function(w) { return w.id == wordId; });
            return {
                word: word,
                stats: stats,
                accuracy: stats.attempts > 0 ? (stats.correct / stats.attempts) : 0
            };
        })
        .filter(function(item) {
            return item.word && item.stats.attempts > 0 && item.accuracy < 0.7;
        })
        .sort(function(a, b) {
            return a.accuracy - b.accuracy;
        });
    
    if (difficultWords.length === 0) {
        difficultList.innerHTML = '<div class="empty-state">Great job! No words need extra practice right now.</div>';
        return;
    }
    
    var html = '';
    difficultWords.forEach(function(item) {
        var accuracy = Math.round(item.accuracy * 100);
        html += '<div class="difficult-item">' +
            '<div class="difficult-word">' +
                '<strong>' + escapeHtml(item.word.norwegian) + '</strong> → ' +
                escapeHtml(item.word.english) +
            '</div>' +
            '<div class="difficulty-score">' + accuracy + '% (' + 
                item.stats.correct + '/' + item.stats.attempts + ')' +
            '</div>' +
        '</div>';
    });
    
    difficultList.innerHTML = html;
}

// Utility functions
function shuffleArray(array) {
    var result = array.slice();
    for (var i = result.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = result[i];
        result[i] = result[j];
        result[j] = temp;
    }
    return result;
}

function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app');
    initializeWordStats();
    showAddWords(); // Start with add words section
    renderWordList(); // Make sure word list is ready
    console.log('App initialized successfully with', vocabulary.length, 'vocabulary entries');
});