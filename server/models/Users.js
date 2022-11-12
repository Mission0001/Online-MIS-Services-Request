module.exports = (sequelize, DataTypes) => {


	const Users = sequelize.define('Users', {
		f_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		m_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		l_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		contact: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},

		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		
	});



	return Users;
};
