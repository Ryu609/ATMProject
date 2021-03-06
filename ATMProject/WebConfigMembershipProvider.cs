﻿using System.Configuration;
using System.Web.Configuration;
using System.Web.Security;

public class WebConfigMembershipProvider : MembershipProvider
{
    private FormsAuthenticationUserCollection _users = null;
    private FormsAuthPasswordFormat _passwordFormat;

    public override bool EnablePasswordRetrieval => throw new System.NotImplementedException();

    public override bool EnablePasswordReset => throw new System.NotImplementedException();

    public override bool RequiresQuestionAndAnswer => throw new System.NotImplementedException();

    public override string ApplicationName { get => throw new System.NotImplementedException(); set => throw new System.NotImplementedException(); }

    public override int MaxInvalidPasswordAttempts => 3;

    public override int PasswordAttemptWindow => throw new System.NotImplementedException();

    public override bool RequiresUniqueEmail => throw new System.NotImplementedException();

    public override MembershipPasswordFormat PasswordFormat => throw new System.NotImplementedException();

    public override int MinRequiredPasswordLength => throw new System.NotImplementedException();

    public override int MinRequiredNonAlphanumericCharacters => throw new System.NotImplementedException();

    public override string PasswordStrengthRegularExpression => throw new System.NotImplementedException();

    public override void Initialize(string name,
      System.Collections.Specialized.NameValueCollection config)
    {
        base.Initialize(name, config);
        _passwordFormat = getPasswordFormat();
    }

    public override bool ValidateUser(string username, string password)
    {
        var user = getUsers()[username];
        if (user == null) return false;

        if (_passwordFormat == FormsAuthPasswordFormat.Clear)
        {
            if (user.Password == password)
            {
                return true;
            }
        }      

        return false;
    }

    protected FormsAuthenticationUserCollection getUsers()
    {
        if (_users == null)
        {
            AuthenticationSection section = getAuthenticationSection();
            FormsAuthenticationCredentials creds = section.Forms.Credentials;
            _users = section.Forms.Credentials.Users;
        }
        return _users;
    }

    protected AuthenticationSection getAuthenticationSection()
    {
        Configuration config = WebConfigurationManager.OpenWebConfiguration("~");
        return (AuthenticationSection)config.GetSection("system.web/authentication");
    }

    protected FormsAuthPasswordFormat getPasswordFormat()
    {
        return getAuthenticationSection().Forms.Credentials.PasswordFormat;
    }

    public override MembershipUser CreateUser(string username, string password, string email, string passwordQuestion, string passwordAnswer, bool isApproved, object providerUserKey, out MembershipCreateStatus status)
    {
        throw new System.NotImplementedException();
    }

    public override bool ChangePasswordQuestionAndAnswer(string username, string password, string newPasswordQuestion, string newPasswordAnswer)
    {
        throw new System.NotImplementedException();
    }

    public override string GetPassword(string username, string answer)
    {
        throw new System.NotImplementedException();
    }

    public override bool ChangePassword(string username, string oldPassword, string newPassword)
    {
        throw new System.NotImplementedException();
    }

    public override string ResetPassword(string username, string answer)
    {
        throw new System.NotImplementedException();
    }

    public override void UpdateUser(MembershipUser user)
    {
        throw new System.NotImplementedException();
    }

    public override bool UnlockUser(string userName)
    {
        throw new System.NotImplementedException();
    }

    public override MembershipUser GetUser(object providerUserKey, bool userIsOnline)
    {
        throw new System.NotImplementedException();
    }

    public override MembershipUser GetUser(string username, bool userIsOnline)
    {
        throw new System.NotImplementedException();
    }

    public override string GetUserNameByEmail(string email)
    {
        throw new System.NotImplementedException();
    }

    public override bool DeleteUser(string username, bool deleteAllRelatedData)
    {
        throw new System.NotImplementedException();
    }

    public override MembershipUserCollection GetAllUsers(int pageIndex, int pageSize, out int totalRecords)
    {
        throw new System.NotImplementedException();
    }

    public override int GetNumberOfUsersOnline()
    {
        throw new System.NotImplementedException();
    }

    public override MembershipUserCollection FindUsersByName(string usernameToMatch, int pageIndex, int pageSize, out int totalRecords)
    {
        throw new System.NotImplementedException();
    }

    public override MembershipUserCollection FindUsersByEmail(string emailToMatch, int pageIndex, int pageSize, out int totalRecords)
    {
        throw new System.NotImplementedException();
    }
}