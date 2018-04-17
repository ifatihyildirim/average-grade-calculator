class Calculator {
    constructor(lessons, effects) {
        this.lessons = lessons;
        this.effects = effects;
    }
    
    creditsSums() {
        var sum = 0;

        Object.keys(this.lessons).forEach((key) => {
            sum += this.lessons[key].ECTS;
        });

        return sum;
    }
    
    ECTSCreditsCalculator(lesson, average) {
        return this.lessons[lesson].ECTS * average;
    }
    
    lessonAverageCalculator(object) {
        var examResult = 0;
        
        Object.keys(object).forEach((key) => {
            
            examResult = examResult + object[key].value * this.effects[object[key].index];
        });
        
        return examResult;
    }
    
    gradeAverageCalculator(object) {
        var average = 0;
        
        Object.keys(object).forEach((key) => {
            var lesson =  this.lessonAverageCalculator(object[key]);
            average += this.ECTSCreditsCalculator(key, lesson);            
        });
        
        return average / this.creditsSums();
    }
}