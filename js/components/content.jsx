/**
 * External dependencies
 */
var React = require( 'react' ),
	sprintf = require( 'sprintf-js' ).sprintf;

/**
 * Internal dependencies
 */

/**
 * 
 */
Content = React.createClass( {
	entryMeta: function() {
		var time = sprintf( '<time class="entry-date published updated" datetime="%1$s">%2$s</time>',
			this.props.post.date,
			this.date()
		);
		var author = sprintf( '<span class="author vcard"><a class="url fn n" href="%1$s">%2$s</a></span>',
			// Note: no author archive link in API yet?
			'http://localhost/trunk/src/author/' + this.props.post.author.slug,
			this.props.post.author.name
		);

		return sprintf( 'Posted on <span class="posted-on">%1$s</span> by <span class="byline">%2$s</span>', 
			time,
			author
		);
	},
	date: function() {
		var date = new Date( this.props.post.date );
		return date.toDateString();
	},
	render: function() {
		return (
			<article id={ this.props.post.ID }>
				<header className="entry-header">
					<h1 className="entry-title">
						<a href={ this.props.post.link } rel="bookmark" dangerouslySetInnerHTML={ { __html: this.props.post.title } } />
					</h1>

					<div className="entry-meta" dangerouslySetInnerHTML={ { __html: this.entryMeta() } } />
				</header>

				<div className="entry-content" dangerouslySetInnerHTML={ { __html: this.props.post.content } } />

				<footer className="entry-footer">
					<span className="cat-links"></span>
					<span className="comments-link"></span>
				</footer>
			</article>
		);
	}
} );

module.exports = Content;