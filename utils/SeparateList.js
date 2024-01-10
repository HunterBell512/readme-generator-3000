// Function to separate comma separated lists
function SeparateList (list, method) {
    // split the list into array
    let split = list.split(', ');

    if (method === 'numeric') {
        for (let i = 0; i < split.length; i++) {
            split[i] = `${i + 1}. ${split[i]}`;
        }
    } else if (method === 'bullet') {
        for (let i = 0; i < split.length; i++) {
            split[i] = `- ${split[i]}`;
        }
    }

    return split.join('\n');
}

module.exports = SeparateList;