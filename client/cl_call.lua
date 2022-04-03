-- send call data to sv

RegisterCommand("call-incoming", function()
    SendMessage('call-incoming', {
        id = 1,   -- number of phone or server id / id for call
        name = "Zemel",
    })
end)

RegisterCommand("incall", function()
    SendMessage('incall', {
        id = 1,   -- number of phone or server id / id for call
        name = "Yungiza",
    })
end)

RegisterCommand("end-incall", function()
    SendMessage('end-incall', {
        id = 1,   -- number of phone or server id / id for call
        name = "Yungiza",
    })
end)

-------------------------------------------------------------------------------

RegisterNUICallback('accept-incomingcall', function(data, cb)
    print('accept-incomingcall data', json.encode(data))

    -- write your function here
end)

RegisterNUICallback('refuse-incomingcall', function(data, cb)
    print('refuse-incomingcall data', json.encode(data))

    -- write your function here
end)

RegisterNUICallback('end-call', function(data, cb)
    print('end-call data', json.encode(data))

    -- write your function here
end)