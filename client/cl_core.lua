-- pas touche
-------------------------------------------------------------------------------

function SendMessage(action, data)
    SendNUIMessage({
      action = action,
      data = data
    })
end

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

------------------------------------------------------------------------------

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