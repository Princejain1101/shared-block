pragma solidity ^0.8.0;
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// contract Color is ERC721 {
// 	string[] public colors;
// 	mapping (string => bool) _colorExists;
	
// 	constructor() ERC721("Color", "COLOR") public {
// 	}

// 	function mint (string memory _color) public {
// 		// Require unique color
// 		colors.push(_color);
// 		uint _id = colors.length;
// 		_mint(msg.sender, _id);
// 		_colorExists[_color] = true;
// 		// Color - track it
// 	}
	
	
// }

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract Color is ERC721Enumerable {
		string[] public colors;
		mapping (string => bool) _colorExists;
		
		constructor() ERC721("Color", "COLOR") public {
		}

    function mint(string memory _color)
        public
    {
			require (!_colorExists[_color]);
    	colors.push(_color);
    	uint _id = colors.length;
      _mint(msg.sender, _id);
      _colorExists[_color] = true;
    }
}