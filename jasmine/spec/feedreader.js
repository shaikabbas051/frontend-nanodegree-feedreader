/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // allFeeds has url and is not empty
         it('ensure allFeeds has URL and is not empty', function(){ 
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeTruthy();
            });
            /*for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
            }*/
         });


        //allFeeds has name and is not empty
         it('ensure allFeeds has name and is not empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeTruthy();
            });
            /*for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
            }*/
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         //menu elements by default. Check it has menu-hidden class
         it('Should hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          //when clicked on icon menu-hidden should false
          it('should show when clicked and should hide on clicked again', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();//when clicked again menu-hidden is true
            expect($('body').hasClass('menu-hidden')).toBe(true);

          });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
            loadFeed(1, done);
            
         });
         it('should have entries',function(done){
            var elements = $('.feed .child');
            expect(elements).toBeTruthy();
            //expect($('.feed').length).toBeGreaterThan(0);
            done();
         });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var content;
         beforeEach(function(done){
            loadFeed(0, function(){
              content = $('.feed').html();
              done();  
            });
            
         });
         it('Should change content', function(done){
            loadFeed(1, done);
            expect($('.feed').html()).not.toEqual(content);
            //expect($('.feed').html() != content).toBe(true);
         });
    });
}());
