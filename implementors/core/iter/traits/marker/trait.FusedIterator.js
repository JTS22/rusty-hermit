(function() {var implementors = {};
implementors["crossbeam_channel"] = [{"text":"impl&lt;T&gt; FusedIterator for <a class=\"struct\" href=\"crossbeam_channel/struct.Iter.html\" title=\"struct crossbeam_channel::Iter\">Iter</a>&lt;'_, T&gt;","synthetic":false,"types":["crossbeam_channel::channel::Iter"]},{"text":"impl&lt;T&gt; FusedIterator for <a class=\"struct\" href=\"crossbeam_channel/struct.IntoIter.html\" title=\"struct crossbeam_channel::IntoIter\">IntoIter</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_channel::channel::IntoIter"]}];
implementors["tinyvec"] = [{"text":"impl&lt;'p, A, I&gt; FusedIterator for <a class=\"struct\" href=\"tinyvec/struct.ArrayVecSplice.html\" title=\"struct tinyvec::ArrayVecSplice\">ArrayVecSplice</a>&lt;'p, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Iterator&lt;Item = A::<a class=\"type\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>&gt;,&nbsp;</span>","synthetic":false,"types":["tinyvec::arrayvec::ArrayVecSplice"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; FusedIterator for <a class=\"struct\" href=\"tinyvec/struct.ArrayVecIterator.html\" title=\"struct tinyvec::ArrayVecIterator\">ArrayVecIterator</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::arrayvec::ArrayVecIterator"]},{"text":"impl&lt;'a, T:&nbsp;'a + Default&gt; FusedIterator for <a class=\"struct\" href=\"tinyvec/struct.ArrayVecDrain.html\" title=\"struct tinyvec::ArrayVecDrain\">ArrayVecDrain</a>&lt;'a, T&gt;","synthetic":false,"types":["tinyvec::arrayvec_drain::ArrayVecDrain"]},{"text":"impl&lt;'p, 's, T:&nbsp;Default&gt; FusedIterator for <a class=\"struct\" href=\"tinyvec/struct.SliceVecDrain.html\" title=\"struct tinyvec::SliceVecDrain\">SliceVecDrain</a>&lt;'p, 's, T&gt;","synthetic":false,"types":["tinyvec::slicevec::SliceVecDrain"]},{"text":"impl&lt;'p, A, I&gt; FusedIterator for <a class=\"struct\" href=\"tinyvec/struct.TinyVecSplice.html\" title=\"struct tinyvec::TinyVecSplice\">TinyVecSplice</a>&lt;'p, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Iterator&lt;Item = A::<a class=\"type\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>&gt;,&nbsp;</span>","synthetic":false,"types":["tinyvec::tinyvec::TinyVecSplice"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; FusedIterator for <a class=\"enum\" href=\"tinyvec/enum.TinyVecIterator.html\" title=\"enum tinyvec::TinyVecIterator\">TinyVecIterator</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::tinyvec::TinyVecIterator"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()