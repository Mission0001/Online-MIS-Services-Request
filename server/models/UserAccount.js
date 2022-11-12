module.exports = (sequelize, DataTypes) => {

			const UserAccounts = sequelize.define('UserAccount', {
				email: {
					type: DataTypes.STRING,
					allowNull: false,
				},
		
				password: {
					type: DataTypes.STRING,
					allowNull: false,
				},

		
	});


	return UserAccounts;
};
