# JarretBellesSPA

<head>
<link href="https://fontsgoogleapiscom/css?family=Roboto" rel="stylesheet">
  <style>
    details {
      font-family: 'Roboto', sans-serif;
    }
  </style>
</head>
<details><summary style="font-size: 32px; padding-top: 25px;">ALESettings</summary>
<p>

```
Stores the Settings for the ALE Event Processor
```
>   <span style="color:cyan;">    HighWaterMark</span>
        tracks the latest processed ID  
>   <span style="color:cyan;">    Topic</span>
        indicates the type of event which the <span style="color:cyan;">HighWaterMark</span> and <span style="color:cyan;">LastProcessedDate</span> relate to, this matches with the APEX documentation naming
</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">Assets</summary>
<p>

```
Stores the assets that the Round platform is currently dealing with
```
>   <span style="color:cyan;">    InvestmentAccountTypeCode</span>
        determines whether this asset belongs in the active or passive portfolios  
>   <span style="color:cyan;">    Symbol</span> and <span style="color:cyan;">    CUSIP</span>
        are the shortened and unique numerical identifiers respectively
</p>
</details>
 <hr style="padding-top: 10px;">       
</br>
<details><summary style="font-size: 32px;">Bank</summary>
<p>

   <span style="color:red; font-size: 24px;">           Deprecated</span>

</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">BankAccount</summary>
<p>

```
Stores the BankAccount entity for each user
```
>   <span style="color:cyan;">    BankApiAccessToken</span> and <span style="color:cyan;">    BankApiAccountId</span>
        retrieved from Plaid  
>   <span style="color:cyan;">    CustodianACHRelationshipId</span> and <span style="color:cyan;">    CustodianAccountId</span>
        retrieved from Sentinel (APEX)  
</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">BankAccountType</summary>
<p>

   <span style="color:red; font-size: 24px;">           Deprecated</span>

</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">BankApi</summary>
<p>

   <span style="color:red; font-size: 24px;">           Deprecated</span>

</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">BetaKeys</summary>
<p>

```
Stores the valid keys required to sign up with Round (currently infinite use)
```
>   <span style="color:cyan;">    Id</span>
        is a standard guid identifier (NOT THE KEY)  
>   <span style="color:cyan;">    Key</span> 
        is the actual key
</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">Device</summary>
<p>

   <span style="color:red; font-size: 24px;">           Deprecated</span>

</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">Form</summary>
<p>

```
Stores the required form data for creating and updating APEX objects
```
>   <span style="color:cyan;">    FormName</span>
        is the exact name of the APEX form  
>   <span style="color:cyan;">    FormMetaData</span> 
        is the JSON schema that the APEX APIs will check against (Must match APEX's most recent version)
</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">Holidays</summary>
<p>

```
Stores days the Round team deems to be Holidays Used to skip some processes on these days 
Currently not being used
```
</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">InvestmentAccount</summary>
<p>

```
Stores days the Round team deems to be Holidays Used to skip some processes on these days 
Currently not being used
```

>   <span style="color:cyan;">    InvestmentAccountTypecode</span>
        specifies which of each of the 3 types the account is (Currently 1 of each type per user)  
>   <span style="color:cyan;">    CustodianAccountId</span> 
        is the user's APEX account id  
>   <span style="color:cyan;">    CustodianAccountRequestId</span> 
        id of the APEX request that initialized the account

</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">InvestmentAccountBalance</summary>
<p>

```
Stores the daily entries of each user's account holdings (One entry per day per user per CUSIP held)
```

>   <span style="color:cyan;">    Balance</span>
        specifies the user's current value of a given <span style="color:cyan;">    CUSIP</span>  
>   <span style="color:cyan;">    CUSIP</span> 
        is the identifier of the particular asset held
</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">InvestmentAccountType</summary>
<p>

```
Stores the different InvestmentAccountTypes
```
</p>
</details>
<hr style="padding-top: 10px;">
</br>


<details><summary style="font-size: 32px;">InvestmentTransaction</summary>
<p>

```
Stores all transactions created on the Round platform.
```

>   <span style="color:cyan;">    ACHTransferId</span>
        is the Id of the transaction on APEX's platform  
>   <span style="color:cyan;">    StatusCode</span> 
        specifies the current status of the given transaction  
>   <span style="color:cyan;">    Direction</span> 
        specifies the current status of the given transaction
</p>
</details>
<hr style="padding-top: 10px;">
</br>


<details><summary style="font-size: 32px;">Notification</summary>
<p>

   <span style="color:red; font-size: 24px;">           Deprecated</span>

</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">ProcessedTransaction</summary>
<p>

   <span style="color:red; font-size: 24px;">           Deprecated</span>

</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">SODFile</summary>
<p>

   <span style="color:red; font-size: 24px;">           Deprecated</span>

</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">User</summary>
<p>

```
Stores all users of the Round platform
```

>   <span style="color:cyan;">    ClearingAccountStatus</span>
        is status of the Client's APEX account  
>   <span style="color:cyan;">    RoundAccountStatus</span> 
        is the Client's Round Account status based on their APEX account status
</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">UserInvestmentPreference</summary>
<p>

```
Stores additional info related to the APEX account of each user
```

>   <span style="color:cyan;">    Profile</span>
        is the raw JSON of the APEX account creation request object  
>   <span style="color:cyan;">    AdditionalInfo</span> 
        is the raw JSON of the Round specific info from Round account creation  
>   <span style="color:cyan;">   (Hedge/Market/Saving)Percentage</span> 
        columns specify the % into each portfolio to invest per account  
>   <span style="color:cyan;">   New(Hedge/Market/Saving)Percentage</span> 
        columns not currently being used
</p>
</details>
<hr style="padding-top: 10px;">
</br>

<details><summary style="font-size: 32px;">UserNotification</summary>
<p>

   <span style="color:red; font-size: 24px;">           Deprecated</span>

</p>
</details>
<hr style="padding-top: 10px;">
</br>


<details><summary style="font-size: 32px;">UserSettings</summary>
<p>

```
Stores recurring payment info for each user (can be extended for additional use) 
```

>   <span style="color:cyan;">    RecurringPaymentDate</span>
        specifies the day on which the next payment will be made, value will update on that day  
>   <span style="color:cyan;">    RecurringPaymentPeriod</span> 
        was intended to specifcy frequency (Monthly/Weekly/etc...) but is currently not being used, frequency is weekly.
</p>
</details>
<hr style="padding-top: 10px;">
</br>
