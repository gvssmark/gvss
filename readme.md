Events this week: bdtable
Lives in: cityTable
Raw Date: rawTable
Branches Worked: brworked_table_text


Divs

footerdiv: will display the footer
div_brworked: Branches worked table
logindiv: Login Screen
city_div: Holds Places of Stay
inThisCity: PIN code wise display of members
buttons_div: Holds all buttons after login
div1: Search by name holder 
photo: holder for photo
rawDataDiv: holder for full srno, name, place, mobile number of all members
about: about this group

Paragraphs:
getnames_brworked
notAmember: Will display a non member message
getnCityNmes: City Names table
inThisCityPara: PIN code wise data
header: Default display is IBAP Retirees' Google Group
on selection of a person, it will change to his name.
getnames: on keyup in search by name, members name display
details: member biodata table 
radDataText: para for members data of srno, name, place, mobile number

Inputs:
loginSrNo: Captures SR No for login
myInput: search by name 
searchMobile: input for searching / filtering table


Functions:
verifyLogin(): Verifies whether the SR No is correct.
searchMobi(): filters mobile numbers
aboutDiv(): to display the about div
getMyData (): gets data from api
and call these function to create tables

branchesList(): Generates unique branches worked array
eventsThisWeek_create(): Birthday / Marriage Ann data generation
createCityTable(): Table from Add3 data
brworked_table_create(): Table of Branches Worked
rawDataTable_create(): data of srno, name, place, mobile number members



brworked_table(): Hide / Show of Divs
showcities(): Hide/show, getting selected city
searchByName():Hide/Show div
dispdata(): on keyup in myInput - show name in seach by name
nameclick(membershipNo): on clik of name display biodata/ show hide divs
rawDataTable(): Show / Hide Div
hide(): show/hide - not being used
eventsThisWeek(): Show Hide
tableText(tableCell): On click on a table gets the city and pin codes
then calls selectedCityPersons() to display the names of the members

searchBranch(): filters the branches worked table
searchMobi(): filters the raw data table
allevents(): all events with color for no events. not implemented
