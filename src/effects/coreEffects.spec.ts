import { deepEqual } from "assert";

import { applicationLoad } from "../actions";
import { applicationLoadEffect } from './coreEffects';

describe('coreEffects', () => {
    describe('applicationLoadEffect', () => {
        it('Receive Application Load action on app start-up', async (done) => {
          // Arrange
          applicationLoadEffect(null, null, null)
              .subscribe(actions => {
                  deepEqual(actions, applicationLoad())
                  done();
              })  
        });  
      });
})