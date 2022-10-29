function compare(a, b){
    if(a.population<b.population){
        return -1;
    }
    if(a.population>b.population){
        return 1;

    }
    return 0;
}
countries_data.sort(comapre);
console.table(countries_data);

let countries = {

}

const sorttable = [];
function