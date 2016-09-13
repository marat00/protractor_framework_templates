describe('Enter Name as Angular', function() {
 it('should add a Name as Angular', function() {
   browser.get('https://angularjs.org');
   element(by.model('yourName')).sendKeys('Angular');
   var angular = element(by.cssContainingText('.ng-binding', 'Hello'));
   expect(angular.getText()).toEqual('Hello Angular!');
  });
});