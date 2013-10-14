/*global describe, it */
'use strict';
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
            	expect(true).to.equal(false)
            });

        });
    });
    describe('More stuff', function() {
    	 it('blarg', function() {
            	expect(6).to.equal(6)
            })
    })
})();
