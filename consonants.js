function countConsonants(str)
{
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for(let char of str)
    {
        if(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z' && !vowels.includes(char))
        {
            count++;
        }
    }
    return count;
}