-- send data to ui
RegisterCommand("bank", function()
    SendMessage('bank-data', {
        id = 1,   -- id of the bank or player
        cash = 1156100,
        balance = 3136541,
        transactions = {
            {
                type = 3, -- 1 = deposit, 2 = retrait, 3 = payement
                amount = 10000,
                source = "LTD"
            },
            {
                type = 3, -- 1 = deposit, 2 = retrait, 3 = payement
                amount = 5000000,
                source = "Concessionaire"
            },
            {
                type = 1, -- 1 = deposit, 2 = retrait, 3 = payement
                amount = 9000000,
                source = "Banque"
            },
            {
                type = 2, -- 1 = deposit, 2 = retrait, 3 = payement
                amount = 100000,
                source = "Banque"
            },
        }
    })
end)

-------------------------------------------------------------------------------

-- config file for bank

RegisterNUICallback('bank-deposit', function(data, cb)
    print('bank-deposit data', json.encode(data))

    -- write your function here
end)

RegisterNUICallback('bank-retrait', function(data, cb)
    print('bank-retrait data', json.encode(data))

    -- write your function here
end)

RegisterNUICallback('bank-transfer', function(data, cb)
    print('bank-transfer data', json.encode(data))

    -- write your function here
end)


