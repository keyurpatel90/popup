<?php
class KP_popup_Block_popup extends Mage_Core_Block_Template
{

    public function getCookieName()
    {
        return Mage::getStoreConfig('popup/general/cookiename');
    }

    public function getCookieLifeTime()
    {
        return Mage::getStoreConfig('popup/general/cookielifetime');
    }

    public function isActivepopup()
    {
        return Mage::getStoreConfig('popup/general/isactive');
    }

    public function getFirstTitle()
    {
        return Mage::getStoreConfig('popup/general/firsttitle',Mage::app()->getStore()->getId());
    }

    public function getSecondTitle()
    {
        return Mage::getStoreConfig('popup/general/secondtitle',Mage::app()->getStore()->getId());
    }

    public function getText()
    {
        return Mage::getStoreConfig('popup/general/message',Mage::app()->getStore()->getId());
    }

    public function getPopupDelay()
    {
        return Mage::getStoreConfig('popup/general/popupdelay',Mage::app()->getStore()->getId());
    }
}