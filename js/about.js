import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition {
    out({from, done}){

        done();
    }
    in({from, to, done}){
        const tl = new TimelineLite();
        tl.fromTo(from, 0.5,
            {x: '0'},
            {x: '-100%', onComplete: function () {
                from.remove();
            }}
        )
        .fromTo(to, 0.5, 
            {x: '-100%'},
            {x: '0'}
        )
        done();
    }
    
}

export default Fade;