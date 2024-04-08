//此文件提供植物魔法系列修改

ServerEvents.recipes(event => {
    //修改白雏菊合成配方
    event.remove({ output: 'botania:pure_daisy' })
    event.recipes.botania.petal_apothecary('botania:pure_daisy', 
        [
            '#botania:petals/white',
            'irons_spellbooks:arcane_essence',
            '#forge:ingots/tin'
        ]
    )

    //修改魔力池配方
    event.remove({ output: 'botania:mana_pool' })
    event.shaped(Item.of('botania:mana_pool',1),
        ['A A',
        'A A',
        'BCB'],
        {
            A:'botania:livingrock',
            B:'#forge:ingots/copper',
            C:'botania:livingwood'
        }
    )

    //魔力充能配方修正
    //种子转化
    //event.recipes.botania.mana_infusion("产出物", "原材料", 消耗法力, "下方催化方块")
    event.recipes.botania.mana_infusion('minecraft:pumpkin_seeds', 'minecraft:wheat_seeds', 100)
    event.recipes.botania.mana_infusion('minecraft:melon_seeds', 'minecraft:pumpkin_seeds', 100)
    event.recipes.botania.mana_infusion('minecraft:beetroot_seeds', 'minecraft:melon_seeds', 100)
    event.recipes.botania.mana_infusion('farmersdelight:cabbage_seeds', 'minecraft:beetroot_seeds', 100)
    event.recipes.botania.mana_infusion('farmersdelight:tomato_seeds', 'farmersdelight:cabbage_seeds', 100)
    event.recipes.botania.mana_infusion('immersiveengineering:seed', 'farmersdelight:tomato_seeds', 100)
    event.recipes.botania.mana_infusion('minecraft:wheat_seeds', 'immersiveengineering:seed', 100)

    //魔钢-奥术源质兑换
    event.recipes.botania.mana_infusion('4x irons_spellbooks:arcane_essence', 'botania:manasteel_ingot', 1000, 'botania:alchemy_catalyst')

    //泰拉凝聚板配方修改
    event.remove({ output: 'botania:terra_plate' })
    event.shaped(Item.of('botania:terra_plate',1),
        ['ABA',
        'CDE',
        'FGH'],
        {
            A:'botania:manasteel_block',
            B:'irons_spellbooks:arcane_rune',
            C:'botania:rune_earth',
            D:'botania:elementium_block',
            E:'botania:rune_water',
            F:'botania:rune_fire',
            G:'botania:rune_mana',
            H:'botania:rune_air'
        }
    )

    //火花配方替换
    event.replaceInput({mod:'botania',output:'botania:spark'},
    'minecraft:gold_nugget', 'botania:elementium_nugget' )

    //自然水晶配方替换
    event.replaceInput({mod:'botania',output:'botania:natura_pylon'},
    'minecraft:ender_eye', 'minecraft:ender_pearl' )
    event.replaceInput({mod:'botania',output:'botania:natura_pylon'},
    'botania:terrasteel_nugget', 'create:brass_nugget' )

    //精灵门核心配方替换
    event.replaceInput({mod:'botania',output:'botania:alfheim_portal'},
    'botania:terrasteel_nugget', 'create:brass_nugget' )

    //魔力枪配方替换
    event.replaceInput({mod:'botania',output:'botania:mana_gun'},
    'minecraft:tnt', 'botania:terrasteel_ingot' )
    event.replaceInput({mod:'botania',output:'botania:mana_gun'},
    'botania:redstone_spreader', 'bloodmagic:magicianbloodorb' )

    //风暴透镜配方
    event.shaped(Item.of('botania:lens_storm',1),
        ['ABA',
        'CDC',
        'ABA'],
        {
            A:'#forge:ingots/steel',
            B:'botania:ender_air_bottle',
            C:'botania:dragonstone',
            D:'bloodmagic:magicianbloodorb'
        }
    )

    //末影之眼配方重写
    event.remove({output:'minecraft:ender_eye'})
    event.shaped(Item.of('minecraft:ender_eye',3),
        ['ABA',
        'BCB',
        'ABA'],
        {
            A:'create:brass_nugget',
            B:'botania:terrasteel_nugget',
            C:'botania:mana_pearl'
        }
    )

    //精灵门交换奥术源质-魔力粉
    event.recipes.botania.elven_trade(
        [
            'botania:mana_powder'
        ], 
        [
            'irons_spellbooks:arcane_essence'
        ]
    )

    //精灵门产出冰封骨头
    event.recipes.botania.elven_trade(
        [
            'irons_spellbooks:frozen_bone'
        ], 
        [
            'minecraft:bone',
            'minecraft:snow_block'
        ]
    )

    //星盘配方增加
    event.shaped(Item.of('blue_skies:astrolabe',1),
        ['ABA',
        'BCB',
        'ABA'],
        {
            A:'botania:dragonstone',
            B:'blue_skies:falsite_ingot',
            C:'blue_skies:star_flare'
        }
    )

    //产能花系列配方修改
    //火红莲
    event.remove({ output: 'botania:endoflame' })
    event.recipes.botania.petal_apothecary('botania:endoflame', 
        [
            '#botania:petals/brown',
            '#botania:petals/red',
            'irons_spellbooks:arcane_essence',
            '#forge:ingots/bronze'
        ]
    )
    //炽玫瑰
    event.remove({ output: 'botania:thermalily' })
    event.recipes.botania.petal_apothecary('botania:thermalily', 
        [
            '#botania:petals/red',
            '#botania:petals/orange',
            'irons_spellbooks:arcane_essence',
            '#forge:ingots/iron',
            'botania:rune_fire',
            'botania:rune_earth'
        ]
    )

})