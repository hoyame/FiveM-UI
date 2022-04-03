RegisterCommand("inventory-send", function()
    SendMessage('inventory-data', {
        id = 1,   -- number of phone or server id / id for call
        items = {
            {
                name = "Argent",
                icon = "https://github.com/PichotM/RPG-Inventory-UI/blob/master/ui/assets/img/items/money.png?raw=true",
                count = 1,
                idItem = "cash"
            }
        },

        proxItems = {
            {
                name = "Argent",
                icon = "https://github.com/PichotM/RPG-Inventory-UI/blob/master/ui/assets/img/items/money.png?raw=true",
                count = 1,
                idItem = "cash"
            } 
        }
    })
end)

-------------------------------------------------------------------------------

-- config file for bank

RegisterNUICallback('inventory-drop', function(data, cb)
    print('inventory-drop data', json.encode(data))

    -- write your function here
end)

RegisterNUICallback('inventory-give', function(data, cb)
    print('inventory-give', json.encode(data))

    -- write your function here
end)

RegisterNUICallback('inventory-use', function(data, cb)
    print('inventory-use data', json.encode(data))

    -- write your function here
end)
