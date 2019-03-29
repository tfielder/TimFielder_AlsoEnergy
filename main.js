/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
    ];

// Part 2 Answer Here

/*
note: this function makes certain assumptions about the data received based on the prompt.
Namely, that the data received is of an array datatype, and each array element
contains a first name, last name, and optionally indicated reverse order that is listed with a lowercased string
called reverse. This function could be refactored to remove these assumptions and handle incompleteness
or alternative values provided in the elements, e.g. nameOrder: "REVERSE".
*/

function groupItems(list) {
  return list.reduce(function (groupedList, element) {
    var key = element.group.toLowerCase();
    if (!groupedList[key]) {
      groupedList[key] = [];
    }
    if (element.nameOrder == "reverse") {
      groupedList[key].push({name: element.last + " " + element.first});
    } else {
       groupedList[key].push({name: element.first + " " + element.last});
    }
    return groupedList;
  }, {});
}


/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here

/* I'm interested in attempting this prompt after completing the
other garage challenge. */
