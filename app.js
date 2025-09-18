// Norwegian Quiz App - Enhanced Statistics Version with Fixed Navigation

class NorwegianQuizApp {
    constructor() {
        console.log('Initializing Enhanced Norwegian Quiz App...');
        
        // Initialize with preloaded vocabulary from provided data
        this.vocabulary = [
            {id: 1, norwegian: "hei", english: "hello"},
            {id: 2, norwegian: "takk", english: "thanks"},
            {id: 3, norwegian: "ja", english: "yes"},
            {id: 4, norwegian: "nei", english: "no"},
            {id: 5, norwegian: "jeg", english: "I"},
            {id: 6, norwegian: "du", english: "you"},
            {id: 7, norwegian: "det", english: "it"},
            {id: 8, norwegian: "hus", english: "house"},
            {id: 9, norwegian: "bil", english: "car"},
            {id: 10, norwegian: "mat", english: "food"},
            {id: 11, norwegian: "vann", english: "water"},
            {id: 12, norwegian: "kaffe", english: "coffee"},
            {id: 13, norwegian: "bok", english: "book"},
            {id: 14, norwegian: "skole", english: "school"},
            {id: 15, norwegian: "dag", english: "day"}
        ];

        // Enhanced statistics tracking
        this.wordStats = {}; // Track correct/incorrect for each word
        this.wrongAnswers = new Set(); // Words that have been answered incorrectly
        this.currentQuiz = null;
        this.editingWordId = null;
        this.stats = {
            quizzesTaken: 0,
            totalQuestions: 0,
            totalCorrect: 0
        };

        // Initialize word stats for existing vocabulary
        this.initializeWordStats();
        
        // Initialize immediately
        this.init();
    }

    initializeWordStats() {
        this.vocabulary.forEach(word => {
            if (!this.wordStats[word.id]) {
                this.wordStats[word.id] = {
                    correct: 0,
                    incorrect: 0,
                    lastSeen: null
                };
            }
        });
    }

    init() {
        console.log('Initializing app with', this.vocabulary.length, 'words');
        
        this.setupEventListeners();
        this.renderVocabulary();
        this.updateWordCount();
        this.updateStats();
        
        console.log('App initialization complete');
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');

        // Navigation buttons - Fixed navigation system
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const section = btn.getAttribute('data-section');
                console.log('Navigation clicked:', section);
                if (section) {
                    this.showSection(section);
                }
            });
        });

        // Add word form
        const addWordForm = document.getElementById('add-word-form');
        if (addWordForm) {
            addWordForm.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Add word form submitted');
                this.handleAddWord();
            });
        }

        // Input field validation
        const norwegianInput = document.getElementById('norwegian-input');
        const englishInput = document.getElementById('english-input');
        
        if (norwegianInput) {
            norwegianInput.addEventListener('input', () => this.clearFieldError('norwegian'));
        }
        
        if (englishInput) {
            englishInput.addEventListener('input', () => this.clearFieldError('english'));
        }

        // Cancel edit button
        const cancelEditBtn = document.getElementById('cancel-edit');
        if (cancelEditBtn) {
            cancelEditBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.cancelEdit();
            });
        }

        // Quiz functionality
        const startQuizBtn = document.getElementById('start-quiz');
        if (startQuizBtn) {
            startQuizBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }

        // Answer buttons for multiple choice
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.selectAnswer(e.target.textContent.trim());
            });
        });

        // Fill-in answer submission
        const submitAnswerBtn = document.getElementById('submit-answer');
        if (submitAnswerBtn) {
            submitAnswerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.submitFillAnswer();
            });
        }

        // Answer input enter key
        const answerInput = document.getElementById('answer-input');
        if (answerInput) {
            answerInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.submitFillAnswer();
                }
            });
        }

        // Next question button
        const nextQuestionBtn = document.getElementById('next-question');
        if (nextQuestionBtn) {
            nextQuestionBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextQuestion();
            });
        }

        // Quiz result buttons
        const anotherQuizBtn = document.getElementById('take-another-quiz');
        if (anotherQuizBtn) {
            anotherQuizBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.resetQuiz();
            });
        }

        const practiceWrongBtn = document.getElementById('practice-wrong-btn');
        if (practiceWrongBtn) {
            practiceWrongBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSection('practice');
            });
        }

        // Statistics controls
        const showAllWordsBtn = document.getElementById('show-all-words');
        if (showAllWordsBtn) {
            showAllWordsBtn.addEventListener('click', () => this.showWordStats(false));
        }

        const showPracticedOnlyBtn = document.getElementById('show-practiced-only');
        if (showPracticedOnlyBtn) {
            showPracticedOnlyBtn.addEventListener('click', () => this.showWordStats(true));
        }

        console.log('Event listeners setup complete');
    }

    // Fixed navigation system
    showSection(sectionName) {
        console.log('Switching to section:', sectionName);
        
        try {
            // Update active nav button
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
            if (activeBtn) {
                activeBtn.classList.add('active');
                console.log('Nav button activated for:', sectionName);
            } else {
                console.error('Nav button not found for section:', sectionName);
            }

            // Hide all sections first
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none'; // Force hide
            });

            // Show target section
            const targetSection = document.getElementById(`${sectionName}-section`);
            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.style.display = 'block'; // Force show
                console.log('Section shown successfully:', sectionName);
                
                // Update content for specific sections
                setTimeout(() => {
                    if (sectionName === 'vocabulary') {
                        this.renderVocabulary();
                    } else if (sectionName === 'practice') {
                        this.renderPracticeWords();
                    } else if (sectionName === 'stats') {
                        this.updateStats();
                        this.showChallengingWords();
                        this.showWordStats(false);
                    }
                }, 50);
                
            } else {
                console.error('Section not found:', `${sectionName}-section`);
                // List all available sections for debugging
                const availableSections = Array.from(document.querySelectorAll('.content-section')).map(s => s.id);
                console.log('Available sections:', availableSections);
            }
        } catch (error) {
            console.error('Error in showSection:', error);
        }
    }

    handleAddWord() {
        console.log('Handling add word...');
        
        const norwegianInput = document.getElementById('norwegian-input');
        const englishInput = document.getElementById('english-input');
        
        if (!norwegianInput || !englishInput) {
            console.error('Input fields not found');
            return;
        }
        
        const norwegian = norwegianInput.value.trim();
        const english = englishInput.value.trim();

        // Validate inputs
        if (!norwegian || !english) {
            if (!norwegian) this.showFieldError('norwegian', 'Norwegian word is required');
            if (!english) this.showFieldError('english', 'English translation is required');
            return;
        }

        // Clear any existing errors
        this.clearFieldError('norwegian');
        this.clearFieldError('english');

        try {
            if (this.editingWordId) {
                // Update existing word
                const wordIndex = this.vocabulary.findIndex(w => w.id === this.editingWordId);
                if (wordIndex !== -1) {
                    this.vocabulary[wordIndex] = {
                        ...this.vocabulary[wordIndex],
                        norwegian: norwegian,
                        english: english
                    };
                }
                this.editingWordId = null;
                const cancelBtn = document.getElementById('cancel-edit');
                if (cancelBtn) cancelBtn.style.display = 'none';
            } else {
                // Add new word
                const newId = Math.max(...this.vocabulary.map(w => w.id), 0) + 1;
                const newWord = {
                    id: newId,
                    norwegian: norwegian,
                    english: english
                };
                
                this.vocabulary.push(newWord);
                
                // Initialize stats for new word
                this.wordStats[newId] = {
                    correct: 0,
                    incorrect: 0,
                    lastSeen: null
                };
            }

            // Clear form
            norwegianInput.value = '';
            englishInput.value = '';
            
            // Show success message
            this.showSuccessMessage();
            
            // Update displays
            this.updateWordCount();
            this.updateStats();
            
        } catch (error) {
            console.error('Error adding word:', error);
            alert('An error occurred while adding the word. Please try again.');
        }
    }

    startQuiz() {
        if (this.vocabulary.length < 4) {
            alert('You need at least 4 words to take a quiz! Add more words first.');
            return;
        }

        // Always exactly 10 questions
        const questionCount = Math.min(10, this.vocabulary.length);
        let questions = this.shuffleArray([...this.vocabulary]).slice(0, questionCount);
        
        // Pad with duplicates if we don't have enough words
        while (questions.length < 10 && this.vocabulary.length > 0) {
            const additionalQuestions = this.shuffleArray([...this.vocabulary]).slice(0, 10 - questions.length);
            questions = questions.concat(additionalQuestions);
        }
        
        // Limit to exactly 10 questions
        questions = questions.slice(0, 10);

        // Assign question types: 50% multiple choice, 50% fill-in
        const questionTypes = [];
        for (let i = 0; i < 5; i++) {
            questionTypes.push('multiple-choice', 'fill-in');
        }
        const shuffledTypes = this.shuffleArray(questionTypes);

        this.currentQuiz = {
            questions: questions.map((word, index) => ({
                ...word,
                type: shuffledTypes[index],
                direction: Math.random() < 0.5 ? 'nor-eng' : 'eng-nor'
            })),
            currentQuestion: 0,
            score: 0,
            answers: []
        };

        // Show quiz interface
        document.getElementById('quiz-setup').classList.add('hidden');
        document.getElementById('quiz-container').classList.remove('hidden');
        document.getElementById('quiz-results').classList.add('hidden');
        
        this.showQuestion();
    }

    showQuestion() {
        const quiz = this.currentQuiz;
        const question = quiz.questions[quiz.currentQuestion];
        
        // Update progress
        document.querySelector('.current-question').textContent = quiz.currentQuestion + 1;
        document.querySelector('.total-questions').textContent = 10;
        document.querySelector('.correct-count').textContent = quiz.score;
        document.querySelector('.answered-count').textContent = quiz.currentQuestion;

        // Update question type indicator
        const questionTypeElement = document.getElementById('question-type');
        if (questionTypeElement) {
            questionTypeElement.textContent = question.type === 'multiple-choice' ? 'Multiple Choice' : 'Fill-in-the-Blank';
        }

        // Create question and determine correct answer
        let questionText, correctAnswer;
        if (question.direction === 'nor-eng') {
            questionText = `What does "${question.norwegian}" mean in English?`;
            correctAnswer = question.english;
        } else {
            questionText = `How do you say "${question.english}" in Norwegian?`;
            correctAnswer = question.norwegian;
        }

        document.getElementById('question-text').textContent = questionText;
        this.currentQuiz.correctAnswer = correctAnswer;

        // Setup answer interface
        if (question.type === 'multiple-choice') {
            this.setupMultipleChoice(question, correctAnswer);
        } else {
            this.setupFillIn();
        }

        // Hide feedback
        document.getElementById('question-feedback').classList.add('hidden');
    }

    setupMultipleChoice(question, correctAnswer) {
        document.getElementById('answer-options').classList.remove('hidden');
        document.getElementById('fill-in-container').classList.add('hidden');

        // Get 3 wrong answers
        const wrongAnswers = this.getWrongAnswers(question, correctAnswer);
        const allOptions = [correctAnswer, ...wrongAnswers];
        const shuffledOptions = this.shuffleArray(allOptions);

        // Update button texts
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach((btn, index) => {
            if (index < shuffledOptions.length) {
                btn.textContent = shuffledOptions[index];
                btn.className = 'answer-btn';
                btn.disabled = false;
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        });
    }

    setupFillIn() {
        document.getElementById('answer-options').classList.add('hidden');
        document.getElementById('fill-in-container').classList.remove('hidden');
        
        const input = document.getElementById('answer-input');
        input.value = '';
        setTimeout(() => input.focus(), 100);
    }

    getWrongAnswers(currentQuestion, correctAnswer) {
        const others = this.vocabulary.filter(w => w.id !== currentQuestion.id);
        
        let candidates;
        if (currentQuestion.direction === 'nor-eng') {
            candidates = others.map(w => w.english).filter(e => e.toLowerCase() !== correctAnswer.toLowerCase());
        } else {
            candidates = others.map(w => w.norwegian).filter(n => n.toLowerCase() !== correctAnswer.toLowerCase());
        }
        
        return this.shuffleArray(candidates).slice(0, 3);
    }

    selectAnswer(answer) {
        // Highlight selected button
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('selected');
            if (btn.textContent.trim() === answer) {
                btn.classList.add('selected');
            }
        });
        
        setTimeout(() => {
            this.checkAnswer(answer);
        }, 500);
    }

    submitFillAnswer() {
        const input = document.getElementById('answer-input');
        const answer = input.value.trim();
        if (answer) {
            this.checkAnswer(answer);
        }
    }

    checkAnswer(userAnswer) {
        const quiz = this.currentQuiz;
        const question = quiz.questions[quiz.currentQuestion];
        const correct = quiz.correctAnswer;
        
        // Enhanced answer checking - case-insensitive with minor variations
        const isCorrect = this.isAnswerCorrect(userAnswer, correct);
        
        // Update word statistics
        this.updateWordStats(question.id, isCorrect);
        
        if (isCorrect) {
            quiz.score++;
        } else {
            this.wrongAnswers.add(question.id);
        }

        quiz.answers.push({
            question,
            userAnswer,
            correctAnswer: correct,
            isCorrect
        });

        this.showFeedback(isCorrect, correct);
    }

    isAnswerCorrect(userAnswer, correctAnswer) {
        const normalize = (str) => str.toLowerCase().trim();
        const userNorm = normalize(userAnswer);
        const correctNorm = normalize(correctAnswer);
        
        // Exact match
        if (userNorm === correctNorm) return true;
        
        // Check for minor variations (ignore common punctuation/spaces)
        const cleanUser = userNorm.replace(/[.,!?;:\s]/g, '');
        const cleanCorrect = correctNorm.replace(/[.,!?;:\s]/g, '');
        
        return cleanUser === cleanCorrect;
    }

    updateWordStats(wordId, isCorrect) {
        if (!this.wordStats[wordId]) {
            this.wordStats[wordId] = { correct: 0, incorrect: 0, lastSeen: null };
        }
        
        if (isCorrect) {
            this.wordStats[wordId].correct++;
        } else {
            this.wordStats[wordId].incorrect++;
        }
        
        this.wordStats[wordId].lastSeen = new Date().toISOString();
    }

    showFeedback(isCorrect, correctAnswer) {
        const feedback = document.getElementById('question-feedback');
        const text = feedback.querySelector('.feedback-text');
        
        if (isCorrect) {
            feedback.className = 'question-feedback correct';
            text.textContent = '✅ Correct! Well done!';
        } else {
            feedback.className = 'question-feedback incorrect';
            text.textContent = `❌ Incorrect. The correct answer is: ${correctAnswer}`;
        }

        // Style answer buttons for multiple choice
        const currentQuestion = this.currentQuiz.questions[this.currentQuiz.currentQuestion];
        if (currentQuestion.type === 'multiple-choice') {
            document.querySelectorAll('.answer-btn').forEach(btn => {
                btn.disabled = true;
                if (btn.textContent.trim() === correctAnswer) {
                    btn.classList.add('correct');
                } else if (btn.classList.contains('selected') && btn.textContent.trim() !== correctAnswer) {
                    btn.classList.add('incorrect');
                }
            });
        }

        feedback.classList.remove('hidden');
    }

    nextQuestion() {
        this.currentQuiz.currentQuestion++;
        
        if (this.currentQuiz.currentQuestion >= 10) {
            this.showResults();
        } else {
            this.showQuestion();
        }
    }

    showResults() {
        const quiz = this.currentQuiz;
        
        // Update global stats
        this.stats.quizzesTaken++;
        this.stats.totalQuestions += 10;
        this.stats.totalCorrect += quiz.score;

        // Show results screen
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('quiz-results').classList.remove('hidden');

        const percentage = Math.round((quiz.score / 10) * 100);
        document.querySelector('.score-percentage').textContent = `${percentage}%`;
        document.querySelector('.final-correct').textContent = quiz.score;
        document.querySelector('.final-total').textContent = '10';

        // Show wrong answers
        const container = document.getElementById('results-wrong-answers');
        const wrongAnswers = quiz.answers.filter(a => !a.isCorrect);
        
        if (wrongAnswers.length > 0) {
            container.innerHTML = `
                <h4>Questions you got wrong:</h4>
                ${wrongAnswers.map(answer => `
                    <div class="wrong-answer-item">
                        <span><strong>${this.escapeHtml(answer.question.direction === 'nor-eng' ? answer.question.norwegian : answer.question.english)}</strong></span>
                        <span>Correct: ${this.escapeHtml(answer.correctAnswer)}</span>
                    </div>
                `).join('')}
            `;
        } else {
            container.innerHTML = '<p>🎉 Perfect score! No wrong answers.</p>';
        }

        this.updateStats();
    }

    resetQuiz() {
        this.currentQuiz = null;
        document.getElementById('quiz-setup').classList.remove('hidden');
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('quiz-results').classList.add('hidden');
    }

    renderPracticeWords() {
        const container = document.getElementById('practice-content');
        const count = document.getElementById('wrong-count');
        
        const wordsToReview = this.vocabulary.filter(word => this.wrongAnswers.has(word.id));
        
        if (count) {
            count.textContent = `${wordsToReview.length} words to review`;
        }

        if (wordsToReview.length === 0) {
            container.innerHTML = '<p class="empty-message">No wrong answers to practice. Take a quiz to get started!</p>';
            return;
        }

        container.innerHTML = `
            <div style="margin-bottom: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
                <button class="btn btn--primary" onclick="window.app.startPracticeQuiz()">Practice Quiz (10 Questions)</button>
                <button class="btn btn--outline" onclick="window.app.clearWrongAnswers()">Clear All</button>
            </div>
            ${wordsToReview.map(word => {
                const stats = this.wordStats[word.id] || { correct: 0, incorrect: 0 };
                const total = stats.correct + stats.incorrect;
                const accuracy = total > 0 ? Math.round((stats.correct / total) * 100) : 0;
                
                return `
                    <div class="practice-word-item">
                        <div class="practice-word-pair">
                            <span class="vocab-word">${this.escapeHtml(word.norwegian)}</span>
                            <span class="vocab-separator">→</span>
                            <span class="vocab-translation">${this.escapeHtml(word.english)}</span>
                            <span class="accuracy-badge">${accuracy}% accuracy</span>
                        </div>
                        <div class="practice-actions">
                            <button class="btn btn--secondary" onclick="window.app.removeFromWrong(${word.id})">Mark as Learned</button>
                        </div>
                    </div>
                `;
            }).join('')}
        `;
    }

    startPracticeQuiz() {
        const wordsToReview = this.vocabulary.filter(word => this.wrongAnswers.has(word.id));
        if (wordsToReview.length === 0) return;

        // Create practice quiz with exactly 10 questions from wrong answers
        let practiceWords = [...wordsToReview];
        
        // If we have fewer than 10 wrong words, repeat them
        while (practiceWords.length < 10 && wordsToReview.length > 0) {
            const additional = wordsToReview.slice(0, 10 - practiceWords.length);
            practiceWords = practiceWords.concat(additional);
        }
        
        practiceWords = practiceWords.slice(0, 10);

        // Mix question types
        const questionTypes = [];
        for (let i = 0; i < 5; i++) {
            questionTypes.push('multiple-choice', 'fill-in');
        }
        const shuffledTypes = this.shuffleArray(questionTypes);

        this.currentQuiz = {
            questions: this.shuffleArray(practiceWords).map((word, index) => ({
                ...word,
                type: shuffledTypes[index],
                direction: Math.random() < 0.5 ? 'nor-eng' : 'eng-nor'
            })),
            currentQuestion: 0,
            score: 0,
            answers: []
        };

        this.showSection('quiz');
        document.getElementById('quiz-setup').classList.add('hidden');
        document.getElementById('quiz-container').classList.remove('hidden');
        this.showQuestion();
    }

    showChallengingWords() {
        const container = document.getElementById('challenging-words-list');
        
        // Get words with statistics and calculate accuracy
        const wordsWithStats = this.vocabulary
            .map(word => {
                const stats = this.wordStats[word.id] || { correct: 0, incorrect: 0 };
                const total = stats.correct + stats.incorrect;
                const accuracy = total > 0 ? stats.correct / total : 1;
                
                return {
                    ...word,
                    ...stats,
                    total,
                    accuracy
                };
            })
            .filter(word => word.total > 0) // Only show words that have been practiced
            .sort((a, b) => a.accuracy - b.accuracy) // Sort by lowest accuracy first
            .slice(0, 5); // Show top 5 most challenging

        if (wordsWithStats.length === 0) {
            container.innerHTML = '<p class="empty-message">Take some quizzes to see your most challenging words!</p>';
            return;
        }

        container.innerHTML = wordsWithStats.map(word => {
            const accuracyPercent = Math.round(word.accuracy * 100);
            let badgeClass = 'accuracy-badge';
            if (accuracyPercent >= 70) badgeClass += ' good';
            else if (accuracyPercent >= 40) badgeClass += ' medium';
            
            return `
                <div class="challenging-word-item">
                    <div class="challenging-word-info">
                        <span class="vocab-word">${this.escapeHtml(word.norwegian)}</span>
                        <span class="vocab-separator">→</span>
                        <span class="vocab-translation">${this.escapeHtml(word.english)}</span>
                    </div>
                    <div class="${badgeClass}">${accuracyPercent}%</div>
                </div>
            `;
        }).join('');
    }

    showWordStats(practicedOnly = false) {
        const container = document.getElementById('word-stats-list');
        
        let wordsToShow = this.vocabulary;
        
        if (practicedOnly) {
            wordsToShow = this.vocabulary.filter(word => {
                const stats = this.wordStats[word.id] || { correct: 0, incorrect: 0 };
                return stats.correct > 0 || stats.incorrect > 0;
            });
        }

        if (wordsToShow.length === 0) {
            container.innerHTML = '<p class="empty-message">No word statistics available yet. Take some quizzes!</p>';
            return;
        }

        // Sort by total practice count (most practiced first)
        const sortedWords = wordsToShow.map(word => {
            const stats = this.wordStats[word.id] || { correct: 0, incorrect: 0 };
            return {
                ...word,
                ...stats,
                total: stats.correct + stats.incorrect
            };
        }).sort((a, b) => b.total - a.total);

        container.innerHTML = sortedWords.map(word => {
            const accuracy = word.total > 0 ? Math.round((word.correct / word.total) * 100) : 0;
            let badgeClass = 'accuracy-badge';
            if (accuracy >= 70) badgeClass += ' good';
            else if (accuracy >= 40) badgeClass += ' medium';
            
            return `
                <div class="word-stat-item">
                    <div class="word-stat-info">
                        <span class="vocab-word">${this.escapeHtml(word.norwegian)}</span>
                        <span class="vocab-separator">→</span>
                        <span class="vocab-translation">${this.escapeHtml(word.english)}</span>
                    </div>
                    <div class="word-stat-data">
                        ${word.total > 0 ? `
                            <span class="${badgeClass}">${accuracy}%</span>
                            <span>✓${word.correct}</span>
                            <span>✗${word.incorrect}</span>
                            <span>Total: ${word.total}</span>
                        ` : '<span>Not practiced</span>'}
                    </div>
                </div>
            `;
        }).join('');
    }

    updateStats() {
        const totalWordsElement = document.getElementById('total-words-stat');
        const quizzesTakenElement = document.getElementById('quizzes-taken-stat');
        const totalQuestionsElement = document.getElementById('total-questions-stat');
        const overallAccuracyElement = document.getElementById('overall-accuracy-stat');
        
        if (totalWordsElement) totalWordsElement.textContent = this.vocabulary.length;
        if (quizzesTakenElement) quizzesTakenElement.textContent = this.stats.quizzesTaken;
        if (totalQuestionsElement) totalQuestionsElement.textContent = this.stats.totalQuestions;
        
        if (overallAccuracyElement) {
            const accuracy = this.stats.totalQuestions > 0 
                ? Math.round((this.stats.totalCorrect / this.stats.totalQuestions) * 100)
                : 0;
            overallAccuracyElement.textContent = `${accuracy}%`;
        }
    }

    // Additional helper methods
    showSuccessMessage() {
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.classList.remove('hidden');
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 3000);
        }
    }

    showFieldError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.remove('hidden');
        }
        
        const inputElement = document.getElementById(`${fieldName}-input`);
        if (inputElement) {
            inputElement.style.borderColor = 'var(--color-error)';
        }
    }

    clearFieldError(fieldName) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.classList.add('hidden');
        }
        
        const inputElement = document.getElementById(`${fieldName}-input`);
        if (inputElement) {
            inputElement.style.borderColor = '';
        }
    }

    renderVocabulary() {
        const vocabularyList = document.getElementById('vocabulary-list');
        
        if (!vocabularyList) {
            console.error('Vocabulary list container not found');
            return;
        }

        if (this.vocabulary.length === 0) {
            vocabularyList.innerHTML = '<p class="empty-message">No words in your vocabulary yet. Click "Add Words" to get started!</p>';
            return;
        }

        vocabularyList.innerHTML = this.vocabulary.map(word => {
            const stats = this.wordStats[word.id] || { correct: 0, incorrect: 0 };
            const total = stats.correct + stats.incorrect;
            const accuracy = total > 0 ? Math.round((stats.correct / total) * 100) : 0;
            
            return `
                <div class="vocab-item">
                    <div class="vocab-pair">
                        <span class="vocab-word">${this.escapeHtml(word.norwegian)}</span>
                        <span class="vocab-separator">→</span>
                        <span class="vocab-translation">${this.escapeHtml(word.english)}</span>
                        ${total > 0 ? `<span class="accuracy-badge ${accuracy >= 70 ? 'good' : accuracy >= 40 ? 'medium' : ''}">${accuracy}%</span>` : ''}
                    </div>
                    <div class="vocab-actions">
                        <button class="btn btn--secondary" onclick="window.app.editWord(${word.id})">Edit</button>
                        <button class="btn btn--outline" onclick="window.app.deleteWord(${word.id})">Delete</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateWordCount() {
        const wordCountElement = document.getElementById('word-count');
        if (wordCountElement) {
            wordCountElement.textContent = `${this.vocabulary.length} words`;
        }
    }

    editWord(id) {
        const word = this.vocabulary.find(w => w.id === id);
        if (!word) return;

        this.editingWordId = id;
        
        const norwegianInput = document.getElementById('norwegian-input');
        const englishInput = document.getElementById('english-input');
        const cancelBtn = document.getElementById('cancel-edit');
        
        if (norwegianInput) norwegianInput.value = word.norwegian;
        if (englishInput) englishInput.value = word.english;
        if (cancelBtn) cancelBtn.style.display = 'inline-block';
        
        this.clearFieldError('norwegian');
        this.clearFieldError('english');
        
        this.showSection('add-words');
    }

    cancelEdit() {
        this.editingWordId = null;
        
        const norwegianInput = document.getElementById('norwegian-input');
        const englishInput = document.getElementById('english-input');
        const cancelBtn = document.getElementById('cancel-edit');
        
        if (norwegianInput) norwegianInput.value = '';
        if (englishInput) englishInput.value = '';
        if (cancelBtn) cancelBtn.style.display = 'none';
        
        this.clearFieldError('norwegian');
        this.clearFieldError('english');
    }

    deleteWord(id) {
        if (confirm('Are you sure you want to delete this word?')) {
            this.vocabulary = this.vocabulary.filter(w => w.id !== id);
            this.wrongAnswers.delete(id);
            delete this.wordStats[id];
            this.renderVocabulary();
            this.updateWordCount();
            this.updateStats();
        }
    }

    removeFromWrong(id) {
        this.wrongAnswers.delete(id);
        this.renderPracticeWords();
        this.updateStats();
    }

    clearWrongAnswers() {
        if (confirm('Clear all wrong answers?')) {
            this.wrongAnswers.clear();
            this.renderPracticeWords();
            this.updateStats();
        }
    }

    shuffleArray(array) {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize app when DOM is ready
let app = null;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, creating app instance...');
    app = new NorwegianQuizApp();
    window.app = app; // Make globally accessible for onclick handlers
});