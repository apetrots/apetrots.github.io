async function load_newest_articles_by_tag(tag, count)
{
    const sqlPromise = initSqlJs({
        locateFile: file => '/js/sql-wasm.wasm'
    });
    const dataPromise = fetch("/blog.db").then(res => res.arrayBuffer());
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
    const db = new SQL.Database(new Uint8Array(buf));

    // Run a query without reading the results
    const stmt = db.prepare("SELECT * FROM articles WHERE article_id IN (SELECT article_id FROM article_tag WHERE tag_id = (SELECT tag_id FROM tags WHERE title='" + tag +"')) ORDER BY updatedAt DESC LIMIT 5;");

    while(stmt.step()) { //
        const row = stmt.getAsObject();
        $('#includedContent').append('<h1>' + row['title'] + '</h1>').append($('<div>').load(row['url'] + ' #preview'));
        console.log(row['url']);
    }
}

$(function(){
    // $("#includedContent").load("/articles/devlog-1-scavenger.html #preview"); 
});
