input.reduce((a,b)=>+((c=b.match(/\d/g))[0]+c.pop())+a,0);