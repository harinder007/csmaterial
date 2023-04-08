export default function addSuffix(i) {
    var a = i % 10,
        b = i % 100;

    if (a == 1 && b != 11) {
        return i + "st";
    } else if (a == 2 && b != 12) {
        return i + "nd";
    } else if (a == 3 && b != 13) {
        return i + "rd";
    } else {
        return i + "th";
    }
}