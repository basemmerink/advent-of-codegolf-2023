input.reduce((a,b,i)=>a-[...b.matchAll(/(\d+) ([rgb])/g)].every(c=>c[1]-13<'rgb'.indexOf(c[2]))*~i,0)