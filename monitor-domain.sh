#!/bin/bash

echo "🔍 Monitoring aimodelstore.in Status"
echo "=================================="

echo ""
echo "📊 DNS Resolution:"
dig aimodelstore.in +short

echo ""
echo "🌐 GitHub Pages IPs Check:"
echo "Expected IPs:"
echo "185.199.108.153"
echo "185.199.109.153"
echo "185.199.110.153"
echo "185.199.111.153"

echo ""
echo "🔒 HTTPS Certificate Check:"
if command -v openssl &> /dev/null; then
    echo "Certificate dates:"
    timeout 10 openssl s_client -connect aimodelstore.in:443 -servername aimodelstore.in < /dev/null 2>/dev/null | openssl x509 -noout -dates 2>/dev/null || echo "Could not connect to HTTPS"
else
    echo "OpenSSL not available - check https://www.ssllabs.com/ssltest/"
fi

echo ""
echo "🌍 Online Monitoring Tools:"
echo "DNS Propagation: https://whatsmydns.net/#A/aimodelstore.in"
echo "SSL Certificate: https://www.ssllabs.com/ssltest/analyze.html?d=aimodelstore.in"
echo "GitHub Pages: https://github.com/advaps/model-ai-store-nk-ai/settings/pages"
