import React from 'react';

import {Simpson} from "./Simpson";

const Simpsons = () => {
    const simpsons = [
        {id: 1 ,name: 'Homer', img: 'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png' },
        {id: 2 ,name: 'Bart', img: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png' },
        {id: 3 ,name: 'Liza', img: 'https://static.wikia.nocookie.net/simpsons/images/5/57/Lisa_Simpson2.png/revision/latest?cb=20140517140928&path-prefix=ru' },
        {id: 4 ,name: 'Marge', img: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png' },
        {id: 5 ,name: 'Maggie', img: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png' }
    ]

    return (
        <div>
            {simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};
