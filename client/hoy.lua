AddEventHandler("playerConnecting", function() 
    SendMessage('verify-1', 'ewo3if9biuwe8bibge6iub4gei')
    Wait(1500)
    SendMessage('verify-2', 'ei64ob4iu46dg34bfgbibgsd4bge')
end)





RegisterNUICallback('blur', function(data, cb)
    TriggerScreenblurFadeIn(100)
    DisplayRadar(false)
end)

RegisterNUICallback('unblur', function(data, cb)
    TriggerScreenblurFadeOut(100)
    DisplayRadar(true)
end)

RegisterNUICallback('unfocus', function(data, cb)
    SetNuiFocus(false, false)
end)

RegisterNUICallback('focus', function(data, cb)
    SetNuiFocus(true, true)
end)

RegisterCommand("focusNUIInv", function()
    SetNuiFocus(true, true)
    TriggerScreenblurFadeIn(100)
    DisplayRadar(false)
end)

RegisterCommand("focusNUI", function()
    SetNuiFocus(true, true)
end)

RegisterCommand("unfocusNUI", function()
    SetNuiFocus(false, false)
    TriggerScreenblurFadeOut(100)
    DisplayRadar(true)
end)