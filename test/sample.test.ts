import * as algorithms from "../src/utils/algorithms";
import sample from "../src/utils/sample";
import { describe, beforeEach, afterEach, it } from "mocha";
import {expect} from "chai";
import * as sinon from 'sinon';
import { mockModule } from './mockModule';


describe('reverse words', () => {
    const mockReverseWord = mockModule(algorithms, {
        reverse_words: () => 'SFsf'
    });

    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('returns the full name of a user', () => {
        mockReverseWord(sandbox);
        expect(sample("df")).to.equal('SFsf');
    });
});