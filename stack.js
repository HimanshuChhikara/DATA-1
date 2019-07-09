var result = mergeArray([1,2,3,4],[2,3,4,5]);
console.log(result);

function mergeArray(a,b){
	for(var i=0;i<b.length;i++){
		a.push(b[i]);
	}
	// console.log(a);
for(i=0;i<a.length;i++)
    {
        for(j=i+1;j<a.length;j++)
        {
            if(a[i]>a[j])
            {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    return a;
}
