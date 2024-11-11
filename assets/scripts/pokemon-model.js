class Pokemon {
    number;
    name;
    type;
    types=[];
    photo;
    stats={};
    
    abilities;
    weight;
    height;
    moves;
    constructor(number,name,types,photo,stats,abilities,weight,height,moves){
        this.number = number;
        this.name = name;
        this.types = types.map(typeSlot=>typeSlot.type.name);
        this.type = this.types[0];
        this.photo = photo;
        this.stats={"hp":stats[0].base_stat,"atk":stats[1].base_stat,"def":stats[2].base_stat,"spatk":stats[3].base_stat,"spdef":stats[4].base_stat,"speed":stats[5].base_stat}
        this.stats["total"]=this.stats.hp+this.stats.def+this.stats.atk+this.stats.spatk+this.stats.spdef+this.stats.speed
        this.abilities = abilities.map((skill)=>skill.ability.name).join(",");
        this.weight  = weight;
        this.height = height,
        this.moves = moves.map((skill)=>skill.move.name).join('  ,  ');

    }

}