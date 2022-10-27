module.exports = {
	displayName: 'tokyo',
	preset: '../../jest.preset.ts',
	transform: {
		'^.+\\.[tj]sx?$': 'babel-jest'
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../coverage/libs/openCIELUM-tokyo'
};
