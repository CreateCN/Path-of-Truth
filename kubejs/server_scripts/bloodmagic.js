//此文件提供血魔法系列修改
//syphon=LP数值
//altarLevel/orbLevel=等级
//consumptionRate=LP消耗率（速度）
//drainRate=LP流失率（损耗）
//tick=速度（20tick=1s）
//count=数量
//minimumDrain=恶魔意志最小值
//drain=恶魔意志消耗值

ServerEvents.recipes(event => {
    //修改血祭坛配方
    //底层青铜，两侧活石，中间高炉砖
    event.replaceInput({mod:'bloodmagic',output:'bloodmagic:altar'},
    'minecraft:gold_ingot', 'kubejs:bronze_ingot' )
    event.replaceInput({mod:'bloodmagic',output:'bloodmagic:altar'},
    '#balm:stones', 'botania:livingrock' )
    event.replaceInput({mod:'bloodmagic',output:'bloodmagic:altar'},
    'minecraft:furnace', 'immersiveengineering:blastbrick' )

    //删除基岩配方
    event.remove({id:'bloodmagic:array/day'})
    event.remove({id:'bloodmagic:array/night'})
    event.remove({id:'bloodmagic:array/spike'})
    event.remove({id:'bloodmagic:array/bounce'})
    event.remove({id:'bloodmagic:array/movement'})
    event.remove({id:'bloodmagic:array/updraft'})

    //炼金术桌配方修改
    //魔力粉-奥术源质兑换
    event.custom({
        "type": "bloodmagic:alchemytable",
        "input": [
            {
                "item": 'botania:mana_powder'
            }
        ],
        "output": {
          "item": 'irons_spellbooks:arcane_essence'
        },
        "syphon": 500,
        "ticks": 200,
        "upgradeLevel": 1
    })

    //祭坛配方修改
    //雷电瓶生成
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 500,
        "consumptionRate": 10,
        "drainRate": 0,
        "input": {
            "item": 'botania:mana_bottle'
        },
        "output": {
            "item": 'irons_spellbooks:lightning_bottle'
        },
        "upgradeLevel": 1
    })

    //炼金矩阵配方修改
    //点铁成金
    event.custom({
        "type": "bloodmagic:array",
        "addedinput": {
            "item": 'botania:mana_powder'
        },
        "baseinput": {
            "item": 'minecraft:iron_ingot'
        },
        "output": {
            "item": 'minecraft:gold_ingot'
        },
        "texture": "bloodmagic:textures/models/alchemyarrays/bindingarray.png"
    })
})