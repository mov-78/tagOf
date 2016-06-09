describe( 'tagOf' , function () {

  it( 'null' , function () {
    expect( tagOf( null ) ).to.be( 'null' )
  } )

  it( 'undefined' , function () {
    expect( tagOf( void 0 ) ).to.be( 'undefined' )
  } )

  it( 'number' , function () {
    expect( tagOf( 0 ) ).to.be( 'number' )
    expect( tagOf( 0 / 0 ) ).to.be( 'number' )
    expect( tagOf( +1 / 0 ) ).to.be( 'number' )
    expect( tagOf( -1 / 0 ) ).to.be( 'number' )
    expect( tagOf( new Number( 0 ) ) ).to.be( 'number' )
    expect( tagOf( new Number( 0 / 0 ) ) ).to.be( 'number' )
    expect( tagOf( new Number( +1 / 0 ) ) ).to.be( 'number' )
    expect( tagOf( new Number( -1 / 0 ) ) ).to.be( 'number' )
  } )

  it( 'string' , function () {
    expect( tagOf( '' ) ).to.be( 'string' )
    expect( tagOf( new String( '' ) ) ).to.be( 'string' )
  } )

  it( 'boolean' , function () {
    expect( tagOf( true ) ).to.be( 'boolean' )
    expect( tagOf( false ) ).to.be( 'boolean' )
    expect( tagOf( new Boolean( true ) ) ).to.be( 'boolean' )
    expect( tagOf( new Boolean( false ) ) ).to.be( 'boolean' )
  } )

  it( 'object' , function () {
    expect( tagOf( {} ) ).to.be( 'object' )
    expect( tagOf( new Object() ) ).to.be( 'object' ) // eslint-disable-line no-new-object
    expect( tagOf( new function () {} ) ).to.be( 'object' )
  } )

  it( 'array' , function () {
    expect( tagOf( [] ) ).to.be( 'array' )
    expect( tagOf( new Array() ) ).to.be( 'array' ) // eslint-disable-line no-array-constructor
  } )

  it( 'function' , function () {
    expect( tagOf( function () {} ) ).to.be( 'function' )
    expect( tagOf( new Function() ) ).to.be( 'function' ) // eslint-disable-line no-new-func
  } )

  it( 'date' , function () {
    expect( tagOf( new Date() ) ).to.be( 'date' )
  } )

  it( 'error' , function () {
    expect( tagOf( new Error() ) ).to.be( 'error' )
    expect( tagOf( new EvalError() ) ).to.be( 'error' )
    expect( tagOf( new RangeError() ) ).to.be( 'error' )
    expect( tagOf( new ReferenceError() ) ).to.be( 'error' )
    expect( tagOf( new SyntaxError() ) ).to.be( 'error' )
    expect( tagOf( new TypeError() ) ).to.be( 'error' )
    expect( tagOf( new URIError() ) ).to.be( 'error' )
  } )

  it( 'regexp' , function () {
    expect( tagOf( /^/i ) ).to.be( 'regexp' )
    expect( tagOf( new RegExp() ) ).to.be( 'regexp' )
  } )

} )
