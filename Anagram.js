function areAnagram(str1, str2)
{
    const formatString = (str) => str.toLowerCase().replace(/[^a-z]/g, ).sort().join('');
    return formatString(str1) === formatString(str2);
}