class Calculator {
    constructor(lessons, effects) {
        this.lessons = lessons;
        this.effects = effects;
    }
    
    creditsSums() {

        var sum = 0;

        Object.keys(this.lessons).forEach((key) => {
            sum = sum + this.lessons[key];
        });

        return sum;
    }
    
    ECTSCreditsCalculator(lesson, avarage) {
        return this.lessons[lesson] * avarage;
    }
    
    lessonAvarageCalculator(object) {
        var examResult = 0;
        
        Object.keys(object).forEach((key) => {
            
            examResult = examResult + object[key].value * this.effects[object[key].index];
        });
        
        return examResult;
    }
    
    yearCalculator(object) {
        var avarage = 0;
        
        Object.keys(object).forEach((key) => {
            var lesson =  this.lessonAvarageCalculator(object[key]);
            avarage = avarage + this.ECTSCreditsCalculator(key, lesson);            
        });
        
        return avarage / this.creditsSums();
    }
}