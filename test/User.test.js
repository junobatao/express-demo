const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
const assert = require('assert');


describe('users', ()=>{
    it('get', async()=>{
        let res = await request.get('/users').send();
        assert.equal(res.status, 200);
        let data = JSON.parse(res.text);
        // console.log(data);

        assert.equal(data.errcode, 1);
        console.log(`invalid msg : ${data.msg}`);
    });
});
